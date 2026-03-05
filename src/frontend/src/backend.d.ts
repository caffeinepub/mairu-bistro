import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Reservation {
    confirmationId: bigint;
    date: string;
    time: string;
    guestName: string;
    notes?: string;
    partySize: bigint;
    phoneNumber: string;
}
export interface MenuItem {
    id: bigint;
    name: string;
    description: string;
    category: string;
    price: number;
}
export interface ContactForm {
    id: bigint;
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    addMenuItem(name: string, description: string, category: string, price: number): Promise<bigint>;
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAllReservationsSortedByDateTime(): Promise<Array<Reservation>>;
    getAllReservationsSortedByGuestName(): Promise<Array<Reservation>>;
    getContactFormById(id: bigint): Promise<ContactForm>;
    getMenuItemById(id: bigint): Promise<MenuItem>;
    getMenuItems(): Promise<Array<MenuItem>>;
    getMenuItemsByCategory(category: string): Promise<Array<MenuItem>>;
    getReservationById(id: bigint): Promise<Reservation>;
    makeReservation(guestName: string, phoneNumber: string, date: string, time: string, partySize: bigint, notes: string | null): Promise<bigint>;
    submitContactForm(name: string, email: string, message: string): Promise<bigint>;
}
