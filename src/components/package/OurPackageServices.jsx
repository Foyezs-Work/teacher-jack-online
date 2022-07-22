import React, { useState } from 'react';

const OurPackageServices = () => {

    const [courseProcess, setCourseProcess] = useState("courseSpecialties")
    return (
        <section class="course-information-component">
            <div class="container h-100 py-md-3">
                <div class="d-flex justify-content-center">
                    <div class="course-information-heading-div text-center mb-3 mb-md-5 d-flex justify-content-between align-items-center">
                        <div class={courseProcess === "courseSpecialties" ? "course-information-title" : "text-center"} onClick={() => setCourseProcess("courseSpecialties")}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <h5>এই কোর্সের বিশেষত্ব কি?</h5>
                        </div>
                        <div class={courseProcess === "courseDuration" ? "course-information-title" : "text-center"} onClick={() => setCourseProcess("courseDuration")}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-square" class="svg-inline--fa fa-pen-square fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"></path>
                            </svg>
                            <h5> এই কোর্স কিভাবে চলবে?</h5>
                        </div>
                    </div>
                </div>
                {
                    courseProcess === "courseDuration" ?
                        <section class="course-learning-component">
                            <div class="row">
                                <div class="col-md-6 d-flex align-items-stretch">
                                    <div class="card w-100 course-learning-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex justify-content-center flex-column flex-lg-row align-items-center mb-0">
                                            <div class="d-flex col-md-3 justify-content-center  align-items-center">
                                                <h1 class="display-1 fw-bold text-secondary">১</h1>
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                {/* <h5></h5> */}
                                                <p>প্রতিদিন রাত <strong>১</strong><strong>০</strong>.<strong>০</strong><strong>০</strong> এর সময় (বাংলাদেশ সময়) একটা মডিউল রিলিজ দেয়া হবে। তোমার কাজ হবে <strong>২</strong><strong>৪</strong> ঘন্টার মধ্যে সব ভিডিও দেখে শেষ করে ফেলা। মোটামুটি <strong>১</strong>.<strong>৫</strong> থেকে <strong>২</strong> ঘন্টার মতো ভিডিও থাকবে। </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex align-items-stretch">
                                    <div class="card w-100 course-learning-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex justify-content-center flex-column flex-lg-row align-items-center mb-0">
                                            <div class="d-flex col-md-3 justify-content-center  align-items-center">
                                                <h1 class="display-1 fw-bold text-secondary">২</h1>
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                {/* <h5></h5> */}
                                                <p>তবে শুধু ভিডিও দেখে গেলে কাজ হবে না। ভিডিও এর কোন টপিক বুঝতে না পারলে গুগল বা ইউটিউবে সার্চ দিয়ে আরো অন্য টিউটোরিয়াল দেখতে হবে। প্রত্যেক ভিডিও শেষে একাধিক প্রশ্ন থাকবে।  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex align-items-stretch">
                                    <div class="card w-100 course-learning-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex justify-content-center flex-column flex-lg-row align-items-center mb-0">
                                            <div class="d-flex col-md-3 justify-content-center  align-items-center">
                                                <h1 class="display-1 fw-bold text-secondary">৩</h1>
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                {/* <h5></h5> */}
                                                <p> কোথাও না বুঝলে বা আটকে গেলে। আমাদের ফেইসবুক গরূপে প্রশ্ন করতে পারবে। তোমার যেকোন প্রশ্নের উত্তর কোর্স চলাকালীন সময়ে <strong>২</strong><strong>৪</strong> ঘন্টার মধ্যে উত্তর দেয়া হবে।</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex align-items-stretch">
                                    <div class="card w-100 course-learning-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex justify-content-center flex-column flex-lg-row align-items-center mb-0">
                                            <div class="d-flex col-md-3 justify-content-center  align-items-center">
                                                <h1 class="display-1 fw-bold text-secondary">৪</h1>
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                {/* <h5></h5> */}
                                                <p>কোর্স এক টানা <strong>২</strong><strong>০</strong> সপ্তাহ চলবে। কোন ডেটিংয়ের ব্রেক, সূর্য না উঠার ব্রেক, বা পাশের বাড়ির ট্যাংকি লিক হয়ে যাওয়ার জন্য কোন গ্যাপ বা বাড়তি সময় দেয়া হবে না। </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex align-items-stretch">
                                    <div class="card w-100 course-learning-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex justify-content-center flex-column flex-lg-row align-items-center mb-0">
                                            <div class="d-flex col-md-3 justify-content-center  align-items-center">
                                                <h1 class="display-1 fw-bold text-secondary">৫</h1>
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                {/* <h5></h5> */}
                                                <p> যারা নিদৃস্ট সময়ের মধ্যে ডেডিকেটেড ভাবে লেগে থেকে কোর্স শেষ করবে। এসাইনমেন্ট সঠিক সময়ে সাবমিট করবে তাদের থেকে SCIC এর জন্য সিলেক্ট করা হবে। SCIC এর জন্য হার্ডওয়ার্ক ছাড়া আলাদা কোন ফি নেই।</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex align-items-stretch">
                                    <div class="card w-100 course-learning-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex justify-content-center flex-column flex-lg-row align-items-center mb-0">
                                            <div class="d-flex col-md-3 justify-content-center  align-items-center">
                                                <h1 class="display-1 fw-bold text-secondary">৬</h1>
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                {/* <h5></h5> */}
                                                <p>আমাদের কোর্স প্রি-রেকর্ডেড (ভিডিও আগে থেকে রেকর্ড করা থাকবে)। অর্থাৎ লাইভ ক্লাস হবে না। তাই রাত <strong>১</strong><strong>০</strong>.<strong>০</strong><strong>০</strong> এর পরে যেকোন সময়ের মধ্যে ভিডিও দেখে নিলেই চলবে। প্রতিদিন গড়ে <strong>৬</strong> থেকে <strong>৮</strong> ঘন্টা সময় দিতে হবে। মিনিমাম <strong>৪</strong> থেকে <strong>৬</strong> ঘন্টা সময় দিতেই হবে।</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex align-items-stretch">
                                    <div class="card w-100 course-learning-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex justify-content-center flex-column flex-lg-row align-items-center mb-0">
                                            <div class="d-flex col-md-3 justify-content-center  align-items-center">
                                                <h1 class="display-1 fw-bold text-secondary">৭</h1>
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                {/* <h5></h5> */}
                                                <p> পাঁচ ছয়টা মডিউল পরে। যখন এসাইনমেন্ট থাকবে তখন এসাইনমেন্ট এর সাইজ অনুসারে তোমাকে এক দিন, দুই দিন বা তিন দিন সময় দেয়া হবে। এসাইনমেন্ট সঠিক সময়ে জমা দিলে <strong>৬</strong><strong>০</strong> মার্কস। একদিন দেরি করলে <strong>৫</strong><strong>০</strong> মার্কস। তার চাইতেও বেশি সময় নিলে <strong>৩</strong><strong>০</strong> মার্কস। </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex align-items-stretch">
                                    <div class="card w-100 course-learning-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex justify-content-center flex-column flex-lg-row align-items-center mb-0">
                                            <div class="d-flex col-md-3 justify-content-center  align-items-center">
                                                <h1 class="display-1 fw-bold text-secondary">৮</h1>
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                {/* <h5></h5> */}
                                                <p> দরকার হলে মাঝে মধ্যে ফেইসবুক গরূপে লাইভ এসে প্রশ্নের উত্তর বা কনসেপ্ট ব্যাখ্যা করা হবে। প্রয়োজনে কোর্সের মধ্যে নতুন মডিউল যোগ করা হবে। যাতে তুমি পরিপূর্ন ওয়েব ডেভেলপার হয়ে উঠো এই একটা মাত্র কোর্স থেকে।  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> :
                        <section class="course-objective-component">
                            <div class="row">
                                <div class="col-md-6 col-lg-3 d-flex align-items-start">
                                    <div class="card w-100 course-information-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex flex-column align-items-center  align-items-lg-start    mb-0 px-3">
                                            <div className='text-center'>
                                                <img class="objective-image" src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1607429634267.png" alt="এইটা কমপ্লিট ওয়েব ডেভেলপমেন্ট এর কোর্স:" />
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                <h5>এইটা কমপ্লিট ওয়েব ডেভেলপমেন্ট এর কোর্স:</h5>
                                                <p>শূন্য থেকে একজন জুনিয়র ওয়েব ডেভেলপার হিসেবে চাকরি পাওয়ার জন্য যা যা লাগে তার সবকিছুই ধরে ধরে শিখানো </p>
                                                {/* <span class="text-danger" style="cursor: pointer; font-weight: 600;">আরও দেখুন</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 d-flex align-items-start">
                                    <div class="card w-100 course-information-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex flex-column align-items-center  align-items-lg-start    mb-0 px-3">
                                            <div>
                                                <img class="objective-image" src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1607429725146.png" alt="আনলিমিটেড সাপোর্ট:" />

                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                <h5>আনলিমিটেড সাপোর্ট: </h5>
                                                <p>কোর্স চলাকালীন সময়ে <strong>২</strong><strong>৪</strong> ঘন্টার মধ্যে তোমার যেকোন প্রশ্নের উত্তর দেয়া হবে (ছুটির দিন বাদে)। পেঁচগি মার</p>
                                                {/* <span class="text-danger" style="cursor: pointer; font-weight: 600;">আরও দেখুন</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 d-flex align-items-start">
                                    <div class="card w-100 course-information-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex flex-column align-items-center  align-items-lg-start    mb-0 px-3">
                                            <div>
                                                <img class="objective-image" src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1607430022157.png" alt="স্পেশাল ইন্টারভিউ প্রিপারেশন গ্রূপ:" />
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                <h5>স্পেশাল ইন্টারভিউ প্রিপারেশন গ্রূপ:</h5>
                                                <p>যারা ডেইলি ডেইলি কাজ করবে। প্রতিদিন <strong>৬</strong> থেকে <strong>৮</strong> ঘন্টা সময় দিবে। জানপ্রাণ দিয়ে সিরিয়াসভাবে কোর্স নির্দিষ</p>
                                                {/* <span class="text-danger" style="cursor: pointer; font-weight: 600;">আরও দেখুন</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 d-flex align-items-start">
                                    <div class="card w-100 course-information-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex flex-column align-items-center  align-items-lg-start    mb-0 px-3">
                                            <div>
                                                <img class="objective-image" src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1623043528965.png" alt="জব প্লেসমেন্ট কোচ:" />
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                <h5>জব প্লেসমেন্ট কোচ:</h5>
                                                <p>যারা SCIC তে সুযোগ পাবে। এবং সেটা ঠিক মতো শেষ করবে আরো <strong>৪</strong> থেকে <strong>৬</strong> সপ্তাহ লেগে থাকবে। তাদের আরো পার্সোন</p>
                                                {/* <span class="text-danger" style="cursor: pointer; font-weight: 600;">আরও দেখুন</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 d-flex align-items-start">
                                    <div class="card w-100 course-information-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex flex-column align-items-center  align-items-lg-start    mb-0 px-3">
                                            <div>
                                                <img class="objective-image" src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1623043584898.png" alt="লাইভ কনচেপচুয়াল সেশন: " />
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                <h5>লাইভ কনচেপচুয়াল সেশন: </h5>
                                                <p>শিখতে দুই-একটা কনসেপ্ট প্রথম ধাক্কায় সবার কাছে ক্লিয়ার নাও হতে পারে। এইটা খুবই স্বাভাবিক। এইটা নিয়ে </p>
                                                {/* <span class="text-danger" style="cursor: pointer; font-weight: 600;">আরও দেখুন</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 d-flex align-items-start">
                                    <div class="card w-100 course-information-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex flex-column align-items-center  align-items-lg-start    mb-0 px-3">
                                            <div>
                                                <img class="objective-image" src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1623043653417.png" alt="Advance ক্রাশ কোর্স (ACC):" />
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                <h5>Advance ক্রাশ কোর্স (ACC):</h5>
                                                <p>প্রোগ্রামিং হিরোতে তুমি জাস্ট একটা কোর্স এ এনরোল করতেছো না। বরং লাইফ লং ওয়েব ডেভেলপমেন্ট শেখার মিশনে</p>
                                                {/* <span class="text-danger" style="cursor: pointer; font-weight: 600;">আরও দেখুন</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 d-flex align-items-start">
                                    <div class="card w-100 course-information-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex flex-column align-items-center  align-items-lg-start    mb-0 px-3">
                                            <div>
                                                <img class="objective-image" src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1623043713790.png" alt=" অফলাইন ভিডিও দেখার সুযোগ " />
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0" style={{ flex: "1 1 0%" }}>
                                                <h5> অফলাইন ভিডিও দেখার সুযোগ </h5>
                                                <p>তোমার ব্রডব্যান্ড নাই! মোবাইল ডাটা বা এমবি কিনে ভিডিও দেখতে হয়? একই ভিডিও বারবার দেখার জন্য যেন ইন্ট</p>
                                                {/* <span class="text-danger" style="cursor: pointer; font-weight: 600;">আরও দেখুন</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 d-flex align-items-start">
                                    <div class="card w-100 course-information-card mt-md-3 mb-md-3">
                                        <div class="card-body d-flex flex-column align-items-center  align-items-lg-start    mb-0 px-3">
                                            <div>
                                                <img class="objective-image" src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1623043766815.png" alt="ইন্টারন্যাশনাল জব প্লেসমেন্ট:" />
                                            </div>
                                            <div class="mt-4  text-center text-lg-start mt-lg-0"  >
                                                <h5>ইন্টারন্যাশনাল জব প্লেসমেন্ট:</h5>
                                                <p>গ্লোবালাইজেশন এর যুগে তোমার জব প্লেসমেন্ট এর টার্গেট কেন শুধু বাংলাদেশ কেন্দ্রিক হবে? বরং দুনিয়ার যে</p>
                                                {/* <span class="text-danger" style="cursor: pointer; font-weight: 600;">আরও দেখুন</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                }


            </div>
        </section>
    );
};

export default OurPackageServices;