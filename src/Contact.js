import React from "react";

function ContactList({contact}) {
    return(
        <div align="center">
            <b>{contact.name}</b><br/>
            <b>{contact.tel}</b><br/>
            <b>{contact.eamil}</b><br/>
            <b>{contact.address}</b><br/>
            <hr/>
        </div>
    );
}

function Contact() {
    const contacts = [
        {
            id : 1,
            name : "미미",
            tel : "010-1111-2222",
            eamil : "abc@test.com",
            address : "경기도 남양주시"
        },
        {
            id : 2,
            name : "홀란드",
            tel : "010-3333-9999",
            eamil : "asdf@test.com",
            address : "경기도 구리시"
        },
        {
            id : 3,
            name : "뭉뭉이",
            tel : "010-555-5555",
            eamil : "kkk@test.com",
            address : "서울특별시 강남구"
        }
    ];
    return(
        <div>
            <h2 className="list">연락처 목록</h2>
            <div>
                <ContactList contact={contacts[0]} />
                <ContactList contact={contacts[1]} />
                <ContactList contact={contacts[2]} />
            </div>
        </div>
    );
};

export default Contact;