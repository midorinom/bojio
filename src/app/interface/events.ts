export interface Event{
    event_id?: number;
    host_id?: number;
    title: string;
    description: string;
    start_date: Date;
    end_date: Date;
    location: string;
    capacity: number;
    price: number;
}