import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
        user: "5fd46ef95e011c",
        pass: "8f591b46bf4032"
        }
    });    

    export class NodemailerMailAdapter implements MailAdapter{
    async sendMail ({subject, body}: SendMailData){
    await transport.sendMail({
        from: 'Equipe Feedget <oifeedget.com>',
        to: 'Guilherme Mesquita <guirozmesquita@.com',
        subject, //assunto
        html: body, 
    })

    };
}