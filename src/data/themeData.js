/* eslint-disable */
import { 
    greenThemeLight, greenThemeDark, bwThemeLight, bwThemeDark, blueThemeLight, blueThemeDark, redThemeLight, redThemeDark, orangeThemeLight, orangeThemeDark, purpleThemeLight, purpleThemeDark, pinkThemeLight, pinkThemeDark, yellowThemeLight, yellowThemeDark
} from '../theme/theme'

let date = new Date();
let currentTime = date.getHours()

let time = '';

if(currentTime >= 6 && currentTime <= 8){
    time = orangeThemeDark
} else if (currentTime >= 9 && currentTime <= 11){
    time = yellowThemeDark
} else if(currentTime >= 12 && currentTime <= 15){
    time = greenThemeDark
} else if(currentTime >= 16 && currentTime <= 19){
    time = purpleThemeDark
} else if(currentTime >= 20 || currentTime <= 5){
    time = bwThemeDark
}

console.log(time)

export const themeData = {
    theme: time
}