import { LightningElement } from 'lwc';
import dmvTheme from '@salesforce/resourceUrl/dmv_designs';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader'; 

export default class SideNavigation extends LightningElement {
    howShould = dmvTheme + '/images/howShould.jpg';
    get = dmvTheme + '/images/get.jpg';
    vision = dmvTheme + '/images/vision.jpg';

    dash = dmvTheme + '/icons/dash.svg';
    documents = dmvTheme + '/icons/documents.svg';
    programs = dmvTheme + '/icons/programs.svg';
    profile = dmvTheme + '/icons/profile.svg';
    time = dmvTheme + '/icons/time.svg';
    support = dmvTheme + '/icons/support-icon.svg';
}