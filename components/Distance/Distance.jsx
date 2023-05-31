import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styles from '../Distance/distance.module.css';

function valuetext(value) {
    return `${value}°km`;
}

const minDistance = 10;

export default function MinimumDistanceSlider() {
    const [value2, setValue2] = React.useState([20]);

    const handleChange2 = (event, newValue) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue < minDistance) {
            const clamped = Math.min(newValue, 100 - minDistance);
            setValue2([clamped]);
        } else {
            setValue2([newValue]);
        }
    };

    return (
        <Box sx={{ width: 300 }}>
            <section className={styles.distance}>
                <div className={styles.title}>
                    distance
                </div>
                <div className={styles.ligne}> </div>
                <Slider
                    className={styles.slider}
                    value={value2}
                    onChange={handleChange2}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
            </section>
        </Box>
    );
}
