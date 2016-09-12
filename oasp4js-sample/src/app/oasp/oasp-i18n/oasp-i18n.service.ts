import {I18n} from '../../main/i18n'

export var i18n = {};

export class OaspI18n {

    getCookie(name) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length == 2){
            return parts.pop().split(";").shift();
        }
    };

    initI18n(){
        let lang = this.getCookie("lang");
        if(lang){
            i18n = I18n[lang];
        } else {
            i18n = I18n.en;
        }
    };

    changeLanguage(code){
        document.cookie="lang=" + code;
        i18n = I18n[code];
        window.location.reload();
    };

    getI18n(){
        return i18n;
    };

}
