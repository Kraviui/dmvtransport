import { LightningElement } from 'lwc';
import dmvTheme from '@salesforce/resourceUrl/dmv_designs';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader'; 

export default class SideNavigation extends LightningElement {
    howShould = dmvTheme + '/images/howShould.jpg';
    get = dmvTheme + '/images/get.jpg';
    vision = dmvTheme + '/images/vision.jpg';

    dash = dmvTheme + '/icons/dash.jpg';

}