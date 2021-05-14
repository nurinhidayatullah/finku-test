const Items = [
    {
        title: "Finku telah terdaftar secara resmi dan diawasi oleh pemerintah Indonesia",
        data: [
            {
                imageName: require('./assets/kominfo.png'),
                text: `<small>Finku terdaftar di bawah <b>KOMINFO</b> yang memiliki SOP & pengaturan keamanan data yang ketat</small>`,
                inline: false
            },
            {
                imageName: require('./assets/flag.png'),
                text: `<small>Finku sudah <b>secara resmi terdaftar</b> sebagai PT</small>`,
                inline: false
            },
            {
                imageName: require('./assets/building.png'),
                text: '<small>Finku dikembangkan oleh tim dari Indonesia yang sudah <b>mempelajari berbagai regulasi</b> terkait keamanan data & privasi</small>',
                inline: false
            },
        ]
    },
    {
        title: "Finku sangat serius & berdedikasi dalam menjaga keamanan datamu",
        data: [
            {
                imageName: require('./assets/lock.png'),
                text: `<small>Finku memanfaatkan enkripsi canggih 256-AES, sama atau lebih tinggi dari <b>rata-rata bank dan aplikasi Fintech di dunia</b></small>`,
                inline: false
            },
            {
                imageName: require('./assets/eye.png'),
                text: `<small>Finku hanya memiliki akses baca (<b>tidak bisa mengubah dan membuat aktivitas</b>), dan hanya membaca data saldo & transaksimu</small>`,
                inline: false
            },
            {
                imageName: require('./assets/trash.png'),
                text: '<small>Finku memfasilitasi apabila kamu ingin menghapus akunmu, dan <b>datamu akan Finku hapus secara menyeluruh</b></small>',
                inline: false
            },
        ]
    },
    {
        title: "Ketentuan privasi",
        data: [
            {
                imageName: require('./assets/lock.png'),
                text: `<small>Finku tidak pernah dan <b>tidak akan pernah menjual atau memberikan datamu</b> ke perusahaan apapun tanpa izin kamu</small>`
                ,
                inline: false
            },
            {
                imageName: require('./assets/edit.png'),
                text: `<small>Finku memantau bagaimana kamu berinteraksi dengan app Finku (contoh: fitur mana yang kamu pakai dan tidak) untuk keperluan <b>evaluasi & meningkatkan kepuasan kamu</b></small>`,
                inline: false
            },
            {
                imageName: require('./assets/note.png'),
                text: '<small>Selengkapnya tentang ketentuan privasi</small>',
                inline: true,
                child: [
                    {
                        title: 'Introduction',
                        text: `<small>Finku (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [name of website.com] [and our mobile application], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.<br><br>We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.<br><br>You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted.</small>`
                    },
                    {
                        title: 'Collection of Your Information',
                        text: `<small>We may collect information about you in a variety of ways. The information we may collect on the Site includes:<br><br><b>Personal Data</b>: Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us [when you register with the Site [or our mobile application,] or] when you choose to participate in various activities related to the Site [and our mobile application], such as online chat and message boards and subscription to newsletters and promotional emails. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site [and our mobile application].<br><br><b>Derivative Data</b>: Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site. [If you are using our mobile application, this information may also include your device name and type, your operating system, your phone number, your country, your likes and replies to a post, and other interactions with the application and other users via server log files, as well as any other information you choose to provide.]<br><br><b>Mobile Device Data</b>: Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.<br><br><b>Data From Contests, Giveaways, and Surveys</b>: Personal and other information you may provide when entering contests or giveaways and/or responding to surveys.</small>`
                    },
                    {
                        title: 'Use of Your Information',
                        text: `<small>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site [or our mobile application] to:</small>`,
                        list: [
                            'Administer sweepstakes, promotions, and contests.',
                            'Compile anonymous statistical data and analysis for use internally or with third parties.',
                            'Create and manage your account.',
                            'Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site [and our mobile application] to you.',
                            'Email you regarding your account or order.',
                            'Enable user-to-user communications.',
                            'Generate a personal profile about you to make future visits to the Site [and our mobile application] more personalized.',
                            'Increase the efficiency and operation of the Site [and our mobile application].',
                            'Monitor and analyze usage and trends to improve your experience with the Site [and our mobile application].',
                            'Notify you of updates to the Site [and our mobile application].',
                            'Offer new products, services, [mobile applications,] and/or recommendations to you.',
                            'Perform other business activities as needed.',
                            'Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.',
                            'Request feedback and contact you about your use of the Site [and our mobile application].',
                            'Resolve disputes and troubleshoot problems.',
                            'Respond to product and customer service requests.',
                            'Send you a newsletter.',
                            'Solicit support for the Site [and our mobile application].',
                        ]
                    },
                    {
                        title: 'Disclosure of Your Information',
                        text: `<small>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:<br><br><b>By Law or to Protect Rights</b>: If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.<br><br><b>Third-Party Service Providers</b>: We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.<br><br><b>Marketing Communications</b>: With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.<br><br><b>Interactions with Other Users</b>: If you interact with other users of the Site [and our mobile application], those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following blogs.<br><br><b>Online Posting</b>: When you post comments, contributions or other content to the Site [or our mobile applications], your posts may be viewed by all users and may be publicly distributed outside the Site [and our mobile application] in perpetuity.<br><br><b>Third-Party Advertisers</b>: We may use third-party advertising companies to serve ads when you visit the Site [or our mobile application]. These companies may use information about your visits to the Site [and our mobile application] and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.<br><br><b>Affiliates</b>: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.<br><br><b>Business Partners</b>: We may share your information with our business partners to offer you certain products, services or promotions.<br><br>If you have questions or comments about this privacy policy, please contact us at: <b>customer.experience@finku.id</b></small>`
                    }, 
                    {
                        title: 'Tracking Technologies',
                        text: `<small>Cookies and Web Beacons: We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site [and our mobile application] to help customize the Site [and our mobile application] and improve your experience. When you access the Site [or our mobile application], your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Site [or our mobile application]. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser’s settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis.<br><br><b>Internet-Based Advertising</b>: Additionally, we may use third-party software to serve ads on the Site [and our mobile application], implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us. For more information about opting-out of interest-based ads, visit the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.<br><br><b>Website and Email Analytics</b>: We may also partner with selected third-party vendors, such as Google Analytics others, to allow tracking technologies and remarketing services on the Site [and our mobile application] through the use of first party cookies and third-party cookies, to, among other things, analyze and track users’ use of the Site [and our mobile application] , determine the popularity of certain content and better understand online activity. By accessing the Site[,our mobile application,], you consent to the collection and use of your information by these third-party vendors. You are encouraged to review their privacy policy and contact them directly for responses to your questions. We do not transfer personal information to these third-party vendors. However, if you do not want any information to be collected and used by tracking technologies, you can visit the third-party vendor or the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.</small>`
                    }
                ]
            },
        ]
    }
]


export default Items