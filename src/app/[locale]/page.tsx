import Image from 'next/image';
import { socialLinks } from '@/config';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations();
  return (
    <section>
      <a href={socialLinks.telegram} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">{t('greeting')}</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>{t('intro')}</p>
        <p className="m-0">{t('experience.0')}</p>
        <p className="m-0">{t('experience.1')}</p>
        <p className="m-0">{t('experience.2')}</p>
        <p>{t('skills')}</p>
        <p>{t('additional')}</p>
        <p>{t('values')}</p>
      </div>
    </section>
  );
}
