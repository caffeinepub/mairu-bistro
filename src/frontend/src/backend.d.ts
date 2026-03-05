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
export interface backendInterface {
    getAllReservationsSortedByDateTime(): Promise<Array<Reservation>>;
    getAllReservationsSortedByGuestName(): Promise<Array<Reservation>>;
    getReservationById(id: bigint): Promise<Reservation>;
    makeReservation(guestName: string, phoneNumber: string, date: string, time: string, partySize: bigint, notes: string | null): Promise<bigint>;
}
