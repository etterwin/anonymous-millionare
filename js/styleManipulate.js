$(document).ready(function() {

    let country = navigator.language||navigator.browserLanguage;

    if (country === 'th') {

        //class
        $('html').addClass('font-th');

        //text
        $('title').text('Anonymous Millionaire');
        $('h1.caption').text('ความลับนี้ทำให้ฉันเป็นเศรษฐีใน  60 วัน');
        $('p.text').text('Anonymous millionaire ในที่สุดก็ได้เปิดเผยความลับความสำเร็จของเขา \n' +
            'ติดตามจดหมายข่าวและติดตามสำหรับการอัพเดต\n');
        $('span.asterisk-text').text('กรอกข้อมูลที่จำเป็น');
        $('span.email-text').text('ที่อยู่อีเมล');

        //attribute
        $('input.email').attr({"placeholder":"กรอกอีเมล์ของคุณ"});
        $('input.button').attr({"value":"สมัครสมาชิก"});

    } else {

        //class
        $('html').addClass('font-en');

        //text
        $('title').text('Anonymous Millionaire');
        $('h1.caption').text('How this trick made me a millionaire in 60 days.');
        $('p.text').text('Anonymous millionaire has finally revealed the secret of his success. Subscribe to the' +
            ' newsletter and follow up for updates!');
        $('span.asterisk-text').text('required');
        $('span.email-text').text('Email Address');

        //attribute
        $('input.email').attr({"placeholder":"Enter your email"});
        $('input.button').attr({"value":"Subscribe"});

    }
});