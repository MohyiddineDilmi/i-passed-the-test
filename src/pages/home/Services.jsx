import React from 'react';
import './services.css';
import styles from '../../modules/styles.module.css';
import imgSrc0 from '../../assets/i-1.png';
import imgSrc1 from '../../assets/i-2.png';
import imgSrc2 from '../../assets/i-3.png';
import imgSrc5 from '../../assets/i-6.jpg';
import ImagePlayer from '../../components/ImagePlayer';
import VideoPlayer from '../../components/VideoPlayer';
import { useTranslation } from 'react-i18next';

const videoUrls = [
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-7_resized.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-4_resized.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-2_resized.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-1_resized.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/v-6_resized.mp4',
];

const videoUrls_1 = [
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/__v_0.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/__v_3.mp4',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/__v_5.mp4',
];

const imgUrls = [
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_0.png',
  'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/images/__i_2.png',
];

function Services() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        maxWidth: '1080px',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="text-tech-container">
        <h1 className={styles.title_primary}>{t('our_services')}</h1>
        <p className={styles.text}>{t('our_services_description')}</p>
      </div>
      {/* <VideoPlayer videoUrls={videoUrls} /> */}
      <div className="services_list">
        <div className="srvice-card">
          <VideoPlayer
            title={t('visual_arts')}
            description={t('visual_arts_description')}
            videoUrls={videoUrls}
          />
        </div>

        <div className="srvice-card">
          <ImagePlayer
            title={t('inspection_and_surveying')}
            description={t('inspection_and_surveying_description')}
            images={imgUrls}
            duration={5}
          />
        </div>
      </div>

      {/* <VideoPlayer videoUrls={videoUrls} /> */}
      <div className="services_list">
        <div className="srvice-card">
          <ImagePlayer
            title={t('thermal_and_infrared_imaging')}
            description={t('thermal_and_infrared_imaging_description')}
            images={[imgSrc0, imgSrc1, imgSrc2, imgSrc5]}
            duration={5}
          />
        </div>

        <div className="srvice-card">
          <VideoPlayer
            title={t('mapping_and_measurement')}
            description={t('mapping_and_measurement_description')}
            videoUrls={videoUrls_1}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
