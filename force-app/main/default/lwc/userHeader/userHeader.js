import {LightningElement,track  } from 'lwc';
import dmvTheme from '@salesforce/resourceUrl/dmv_designs';
import { loadStyle } from 'lightning/platformResourceLoader'; 

export default class UserHeader extends LightningElement {
    dmvLogo = dmvTheme + '/icons/logo.svg';
    langvage  = dmvTheme + '/icons/langvage.svg';

    connectedCallback() {
        loadStyle(this, dmvTheme + '/main.css');
        
    }
    createAccount() {
        window.open('dmv/s/createaccount', '_blank');
    }
}