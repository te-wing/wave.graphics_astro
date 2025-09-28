'use client';

import { useState } from 'react';
import SuperpositionCanvas from './canvas.tsx';
import styles from './control.module.scss'

export default function KasaneWave() {
  // スライダの値を管理
  const [leftAmplitude, setLeftAmplitude] = useState(110);
  const [rightAmplitude, setRightAmplitude] = useState(40);

  return (
    <>
      <section className={styles.controlSection}>
        <SuperpositionCanvas 
          waveAmplitudeLeft={leftAmplitude}
          waveAmplitudeRight={rightAmplitude}
        />
        <table className={styles.controlTable}>
          <tbody>
            <tr>
              <td>
                <label htmlFor='leftAmplitudeSlider'>
                  左の波の高さ：{leftAmplitude} px
                </label>
              </td>
              <td>
                <input
                  id='leftAmplitudeSlider'
                  className={styles.slider}
                  type='range'
                  min='-120'
                  max='120'
                  value={leftAmplitude}
                  onChange={(e) => setLeftAmplitude(Number(e.target.value))}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='rightAmplitudeSlider'>
                  右の波の高さ：{rightAmplitude} px
                </label>
              </td>
              <td>
                <input
                  id='rightAmplitudeSlider'
                  className={styles.slider}
                  type='range'
                  min='-120'
                  max='120'
                  value={rightAmplitude}
                  onChange={(e) => setRightAmplitude(Number(e.target.value))}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}