export namespace AppTypes {
    export interface AppState {
        selectedItem: Business;
        business: Business[];
    }
    
    export interface Business {
        name: string;
        id: string;
        url: string;
        phone: string;
        display_phone: string;
        rating: number;
        photos: string [];
        location: Location;
        reviews: Reviews [];
    }

    export interface Location {
        address1: string;
        city: string;
        postal_code: string;
        formatted_address: string;
    }

    export interface Reviews {
        text: string;
        rating: number;
    }
}