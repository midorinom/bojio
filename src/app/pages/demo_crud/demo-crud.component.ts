import { Component, OnInit} from '@angular/core';
import { DemoMessage } from 'src/app/interface/demoMessage';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DemoService } from 'src/app/service/demo.service';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './demo-crud.component.html',
    providers: [MessageService]
})
export class DemoCrudComponent implements OnInit {

    messageDialog: boolean = false;
    deleteMessageDialog: boolean = false;
    deleteMessagesDialog: boolean = false;
    allMessages: DemoMessage[] = [];
    message: DemoMessage = {};
    selectedMessages: DemoMessage[] = [];
    submitted: boolean = false;
    cols: any[] = [];
    rowsPerPageOptions = [5, 10, 20];

    constructor(private productService: DemoService, private messageService: MessageService, public layoutService: LayoutService, public router: Router) { }

    ngOnInit() {
        this.productService.getMessages().then(response => {
            switch (response.status) {
                case 200:
                    this.allMessages = response.body
                    break;
                case 500:
                    this.messageService.add({ severity: 'error', summary: 'Unsuccessful', detail: 'An error occurred, please refresh the page', life: 3000 });
                    break;
            }
        });

        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'message', header: 'Message' },
        ];
    }

    openNew() {
        this.message = {};
        this.submitted = false;
        this.messageDialog = true;
    }

    deleteSelectedMessages() {
        this.deleteMessagesDialog = true;
    }

    editMessage(product: DemoMessage) {
        this.message = { ...product };
        this.messageDialog = true;
    }

    deleteMessage(product: DemoMessage) {
        this.deleteMessageDialog = true;
        this.message = { ...product };
    }

    confirmDeleteSelected() {
        this.deleteMessagesDialog = false;
        this.allMessages = this.allMessages.filter(val => !this.selectedMessages.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedMessages = [];
    }

    confirmDelete() {
        this.productService.deleteMessage(this.message).then(response => {
            switch (response.status) {
                case 200:
                    this.allMessages = this.allMessages.filter(val => val.id !== this.message.id);
                    this.message = {};
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Message deleted', life: 3000 });
                    break;
                case 500:
                    this.messageService.add({ severity: 'error', summary: 'Unsuccessful', detail: 'An error occurred, please try again', life: 3000 });
                    break;
            }
            this.deleteMessageDialog = false;
        });
    }

    hideDialog() {
        this.messageDialog = false;
        this.submitted = false;
    }

    saveMessage() {
        this.submitted = true;
        
        if (this.message.message?.trim()) {
            if (this.message.id) {
                this.productService.updateMessage(this.message).then(response => {
                    switch (response.status) {
                        case 200:
                            var productIndex = this.allMessages.findIndex((item) => item.id === this.message.id);
                            this.allMessages[productIndex] = this.message;
                            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Message updated', life: 3000 });
                            break;
                        case 409:
                            this.messageService.add({ severity: 'error', summary: 'Unsuccessful', detail: 'Message already exists', life: 3000 });
                            break;
                        case 500:
                            this.messageService.add({ severity: 'error', summary: 'Unsuccessful', detail: 'An error occurred, please try again', life: 3000 });
                            break;
                    }
                    this.allMessages = [...this.allMessages];
                    this.messageDialog = false;
                    this.message = {};
                });
            } else {
                this.productService.addMessage(this.message).then(response => {
                    switch (response.status) {
                        case 200:
                            var newMessage = response.body as DemoMessage;
                            this.allMessages.push(newMessage);
                            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Message created', life: 3000 });
                            break;
                        case 409:
                            this.messageService.add({ severity: 'error', summary: 'Unsuccessful', detail: 'Message already exists', life: 3000 });
                            break;
                        case 500:
                            this.messageService.add({ severity: 'error', summary: 'Unsuccessful', detail: 'An error occurred, please try again', life: 3000 });
                            break;
                    }
                    this.allMessages = [...this.allMessages];
                    this.messageDialog = false;
                    this.message = {};
                });
            }
        }
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}
