import { FormEvent, useMemo, useState } from 'react';
import { weddingInfo } from '../data/wedding';
import type { RSVPFormPayload } from '../lib/api';
import { submitRsvp } from '../lib/api';

const initialForm: RSVPFormPayload = {
  name: '',
  phone: '',
  email: '',
  attendance: '',
  adultCount: '',
  childCount: '',
  childSeatCount: '',
  vegetarianCount: '',
  inviteType: '',
  address: '',
  note: '',
};

type Errors = Partial<Record<keyof RSVPFormPayload, string>>;

export function RSVPForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showCalendarButton, setShowCalendarButton] = useState(false);

  const isAttending = form.attendance === '出席';
  const needsPaperInvite = form.inviteType === '紙本喜帖' || form.inviteType === '都要';
  const needsEmailInvite = form.inviteType === '電子喜帖' || form.inviteType === '都要';

  const visibleErrors = useMemo(() => Object.values(errors).filter(Boolean), [errors]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    setSubmitMessage('');
    setShowCalendarButton(false);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);

    try {
      const result = await submitRsvp(form);
      setSubmitMessage(result.message ?? '表單已送出，謝謝你的回覆。');
      setShowCalendarButton(true);
      setForm(initialForm);
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : '送出失敗，請稍後再試。');
    } finally {
      setSubmitting(false);
    }
  }

  function updateField(field: keyof RSVPFormPayload, value: string) {
    setForm((current) => {
      const next = { ...current, [field]: value };

      if (field === 'attendance' && value === '不出席') {
        next.adultCount = '';
        next.childCount = '';
        next.childSeatCount = '';
        next.vegetarianCount = '';
        next.inviteType = '';
        next.email = '';
        next.address = '';
      }

      if (field === 'inviteType' && value !== '紙本喜帖' && value !== '都要') {
        next.address = '';
      }

      if (field === 'inviteType' && value !== '電子喜帖' && value !== '都要') {
        next.email = '';
      }

      return next;
    });
  }

  return (
    <section id="rsvp" className="px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-4">
          <p className="text-sm tracking-[0.35em] text-forest">RSVP</p>
          <h2 className="font-serif text-4xl text-ink md:text-5xl">敬請留下回覆</h2>
          <p className="max-w-md leading-8 text-ink/70">
            表單內容依照你提供的欄位規格整理，視覺則改成更柔和、乾淨的韓系風格。之後接上
            Google Sheets 後，就能直接彙整賓客名單。
          </p>

          <div className="rounded-[1.7rem] border border-white/70 bg-white/70 p-5 shadow-soft">
            <p className="text-sm leading-7 text-ink/75">填寫提醒</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-ink/65">
              <li>請於截止日前完成回覆。</li>
              <li>選擇紙本喜帖時，系統會要求填寫收件地址。</li>
              <li>若選擇不出席，出席人數等欄位會自動收起。</li>
            </ul>
          </div>
        </div>

        <form
          className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-soft backdrop-blur md:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4">
            <TextField
              label="您的大名"
              required
              value={form.name}
              onChange={(value) => updateField('name', value)}
              error={errors.name}
            />
            <TextField
              label="您的手機"
              required
              inputMode="tel"
              value={form.phone}
              onChange={(value) => updateField('phone', value)}
              error={errors.phone}
            />
            <SelectField
              label="是否出席婚禮？"
              required
              value={form.attendance}
              onChange={(value) => updateField('attendance', value)}
              options={['出席', '不出席']}
              error={errors.attendance}
            />

            {isAttending ? (
              <>
                <RadioField
                  label="喜帖形式"
                  required
                  value={form.inviteType}
                  onChange={(value) => updateField('inviteType', value)}
                  options={['紙本喜帖', '電子喜帖', '都要']}
                  error={errors.inviteType}
                />
                {needsEmailInvite ? (
                  <TextField
                    label="E-mail"
                    required
                    inputMode="email"
                    value={form.email}
                    onChange={(value) => updateField('email', value)}
                    error={errors.email}
                  />
                ) : null}
                <TextField
                  label="出席「成人」人數"
                  required
                  inputMode="numeric"
                  value={form.adultCount}
                  onChange={(value) => updateField('adultCount', value)}
                  error={errors.adultCount}
                />
                <TextField
                  label="出席「小孩」人數"
                  required
                  inputMode="numeric"
                  value={form.childCount}
                  onChange={(value) => updateField('childCount', value)}
                  error={errors.childCount}
                />
                <SelectField
                  label="需要幾張兒童座椅"
                  required
                  value={form.childSeatCount}
                  onChange={(value) => updateField('childSeatCount', value)}
                  options={['0', '1', '2', '3', '4']}
                  error={errors.childSeatCount}
                />
                <SelectField
                  label="需要幾份素食？"
                  required
                  value={form.vegetarianCount}
                  onChange={(value) => updateField('vegetarianCount', value)}
                  options={['0', '1', '2', '3', '4']}
                  error={errors.vegetarianCount}
                />
              </>
            ) : null}

            {needsPaperInvite ? (
              <TextAreaField
                label="紙本喜帖收件地址"
                required
                value={form.address}
                onChange={(value) => updateField('address', value)}
                error={errors.address}
              />
            ) : null}

            <TextAreaField
              label="其他備註"
              value={form.note}
              onChange={(value) => updateField('note', value)}
              error={errors.note}
            />
          </div>

          <div className="mt-6 space-y-3">
            <button
              className="inline-flex w-full items-center justify-center rounded-full bg-forest px-6 py-4 text-sm font-medium tracking-[0.25em] text-white transition hover:bg-[#5f7d67] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={submitting}
              type="submit"
            >
              {submitting ? '送出中...' : '送出回覆'}
            </button>

            {visibleErrors.length > 0 ? (
              <p className="text-sm leading-7 text-[#b95c53]">請先完成必填欄位並確認格式。</p>
            ) : null}

            {submitMessage ? (
              <div className="space-y-3 rounded-2xl bg-sage/45 px-4 py-4 text-sm leading-7 text-forest">
                <p>{submitMessage}</p>
                {showCalendarButton ? (
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium tracking-[0.15em] text-forest transition hover:bg-cream"
                    href={buildCalendarUrl()}
                    rel="noreferrer"
                    target="_blank"
                  >
                    加入行事曆
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

function validateForm(form: RSVPFormPayload) {
  const errors: Errors = {};
  const phonePattern = /^09\d{8}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const needsEmailInvite = form.inviteType === '電子喜帖' || form.inviteType === '都要';
  const needsPaperInvite = form.inviteType === '紙本喜帖' || form.inviteType === '都要';

  if (!form.name.trim()) errors.name = '必填';
  if (!phonePattern.test(form.phone.trim())) errors.phone = '手機格式錯誤';
  if (!form.attendance) errors.attendance = '必填';

  if (form.attendance === '出席') {
    if (!form.inviteType) errors.inviteType = '必填';
    if (needsEmailInvite && !emailPattern.test(form.email.trim())) errors.email = 'Email 格式錯誤';
    if (!form.adultCount.trim()) errors.adultCount = '必填';
    if (!form.childCount.trim()) errors.childCount = '必填';
    if (!form.childSeatCount.trim()) errors.childSeatCount = '必填';
    if (!form.vegetarianCount.trim()) errors.vegetarianCount = '必填';
  }

  if (needsPaperInvite && !form.address.trim()) {
    errors.address = '請填寫收件地址';
  }

  return errors;
}

function buildCalendarUrl() {
  const start = '20260919T040000Z';
  const end = '20260919T070000Z';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${weddingInfo.groom} & ${weddingInfo.bride} 婚宴`,
    dates: `${start}/${end}`,
    details: `誠摯邀請您參加 ${weddingInfo.groom} 與 ${weddingInfo.bride} 的婚宴。`,
    location: `${weddingInfo.venue} ${weddingInfo.address}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function FieldShell({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block rounded-[1.4rem] border border-sand bg-[#fffcf8] px-5 py-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-lg text-ink">
          {required ? <span className="mr-1 text-[#c36055]">*</span> : null}
          {label}
        </span>
        {error ? <span className="text-sm text-[#c36055]">{error}</span> : null}
      </div>
      {children}
    </label>
  );
}

function TextField({
  label,
  value,
  onChange,
  required,
  inputMode,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  error?: string;
}) {
  return (
    <FieldShell label={label} required={required} error={error}>
      <input
        className="w-full border-0 bg-transparent px-0 py-1 text-base text-ink outline-none placeholder:text-ink/25"
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </FieldShell>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}) {
  return (
    <FieldShell label={label} required={required} error={error}>
      <textarea
        className="min-h-28 w-full resize-y border-0 bg-transparent px-0 py-1 text-base text-ink outline-none placeholder:text-ink/25"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </FieldShell>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
  error?: string;
}) {
  return (
    <FieldShell label={label} required={required} error={error}>
      <select
        className="w-full appearance-none border-0 bg-transparent px-0 py-1 text-base text-ink outline-none"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">請選擇</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

function RadioField({
  label,
  value,
  onChange,
  options,
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
  error?: string;
}) {
  return (
    <FieldShell label={label} required={required} error={error}>
      <div className="flex flex-col gap-3 pt-1">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 text-lg text-ink">
            <input
              checked={value === option}
              className="h-5 w-5 accent-[#c36055]"
              name={label}
              type="radio"
              value={option}
              onChange={(event) => onChange(event.target.value)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </FieldShell>
  );
}
