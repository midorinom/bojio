export interface Event{
    event_id?: number;
    host_id?: number;
    title: string;
    description: string;
    start_date: string;
    end_date: string;
    location: string;
    capacity: number;
    price: number;
    attendees?: number;
}