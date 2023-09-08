<template>


<head>

    <meta charset="utf-8" />
    <title>Desk Birdy | Business Permits</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Rental management system by Nouveta LTD" name="description" />
    <meta content="Kelvin Njuguna" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.svg">
    <!-- droping file -->
    <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css" />

    <!-- DataTables -->
    <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
        type="text/css" />

    <!-- Bootstrap Css -->
    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Bootstrap select styling -->
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->

    <!-- owl.carousel css -->
    <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.carousel.min.css">

    <link rel="stylesheet" href="assets/libs/owl.carousel/assets/owl.theme.default.min.css">

    <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
    <!-- custom Css-->
    <link href="assets/css/custom.css" id="app-style" rel="stylesheet" type="text/css" />

</head>

<body data-sidebar="dark">

    <!-- Begin page -->
    <div id="layout-wrapper">


        <NavigationBar/>


        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    <!-- start page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0 font-size-18">Business Permits</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="index.html">Dashboards</a></li>
                                        <li class="breadcrumb-item"><a href="#">Certificates & Licenses</a></li>
                                        <li class="breadcrumb-item"><a href="#">Business Permits</a></li>
                                        <li class="breadcrumb-item active">SBP Stats</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->

                  <!-- tool bar -->

                    <ToolBar/>

                    <!-- end of toolbar -->

                    <div class="row">
                        <div class="col-lg-12 px-sm-30px">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">

                                        <div class="col-sm-12 align-self-center text-capitalize">
                                            <div class="text-lg-left mt-4 mt-lg-0">
                                                <div class="row">
                                                    <div class="col-sm-6 col-md-2 col-lg-2 mb-5 mb-md-0">
                                                        <div>
                                                            <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-info font-size-16">
                                                                        <i class="mdi mdi-briefcase-edit text-white"></i>
                                                                    </span>
                                                            </div>
                                                            <p class="text-muted text-truncate mb-2">Registered Businesses</p>
                                                            <h5 class="mb-0">48</h5>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6 col-md-2 col-lg-2 mb-5 mb-md-0">
                                                        <div>
                                                            <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle font-size-16">
                                                                        <i class="mdi mdi mdi-briefcase-check text-white"></i>
                                                                    </span>
                                                            </div>
                                                            <p class="text-muted text-truncate mb-2">Pending Applications</p>
                                                            <h5 class="mb-0">6,503</h5>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                                                        <div>
                                                            <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-pink font-size-16">
                                                                        <i class="mdi mdi-progress-clock text-white"></i>
                                                                    </span>
                                                            </div>
                                                            <p class="text-muted text-truncate mb-2">Suspended Applications</p>
                                                            <h5 class="mb-0">180</h5>

                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                                                        <div>
                                                            <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-whatsApp font-size-16">
                                                                        <i class="mdi mdi-progress-clock text-white"></i>
                                                                    </span>
                                                            </div>
                                                            <p class="text-muted text-truncate mb-2">Active Certs</p>
                                                            <h5 class="mb-0">5,236</h5>

                                                        </div>
                                                    </div>

                                                    <div class="col-sm-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                                                        <div>
                                                            <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-warning font-size-16">
                                                                        <i class="mdi mdi-close text-white"></i>
                                                                    </span>
                                                            </div>
                                                            <p class="text-muted text-truncate mb-2">Expirted Certs</p>
                                                            <h5 class="mb-0">22</h5>

                                                        </div>
                                                    </div>

                                                    <div class="col-sm-12 col-md-2 col-lg-2 mb-5 mb-md-0">
                                                        <div>
                                                            <div class="avatar-xs mb-3">
                                                                <span class="avatar-title rounded-circle bg-danger font-size-16">
                                                                        <i class="mdi mdi-clock-alert text-white"></i>
                                                                    </span>
                                                            </div>
                                                            <p class="text-muted text-truncate mb-2">Penalized Certs</p>
                                                            <h5 class="mb-0">48</h5>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <!-- end row -->
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 px-sm-30px">
                            <div class="row">
                                <div class="col-lg-3">
                                    <div class="card mini-stats-wid">
                                        <div class="card-body">
                                            <div class="d-flex flex-wrap">
                                                <div class="me-3">
                                                    <p class="text-muted mb-2">Value of Pending SBP Bills</p>
                                                    <h5 class="mb-0 fw-bold">KES 34,000</h5>
                                                </div>

                                                <div class="avatar-sm ms-auto">
                                                    <div class="avatar-title bg-light rounded-circle text-danger font-size-20">
                                                        <i class="mdi mdi-account-cash"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body border-top py-3">
                                            <p class="mb-0"> From 34 Businesses</p>
                                        </div>
                                    </div>
                                </div><!--end col-->
                                <div class="col-lg-3">
                                    <div class="card mini-stats-wid">
                                        <div class="card-body">
                                            <div class="d-flex flex-wrap">
                                                <div class="me-3">
                                                    <p class="text-muted mb-2">SBP Collections Today</p>
                                                    <h5 class="mb-0 fw-bold">KES 34,000</h5>
                                                </div>

                                                <div class="avatar-sm ms-auto">
                                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                                                        <i class="mdi mdi-calendar-text-outline "></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body border-top py-3">
                                            <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 18.89%</span> Target Margin</p>
                                        </div>
                                    </div>
                                </div><!--end col-->
                                <div class="col-lg-3">
                                    <div class="card mini-stats-wid">
                                        <div class="card-body">
                                            <div class="d-flex flex-wrap">
                                                <div class="me-3">
                                                    <p class="text-muted mb-2">SBP Collections Thid Month</p>
                                                    <h5 class="mb-0 fw-bold">KES 34,000</h5>
                                                </div>

                                                <div class="avatar-sm ms-auto">
                                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                                                        <i class="mdi mdi-calendar-month-outline "></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body border-top py-3">
                                            <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 8.41%</span> Target Margin</p>
                                        </div>
                                    </div>
                                </div><!--end col-->
                                <div class="col-lg-3">
                                    <div class="card mini-stats-wid">
                                        <div class="card-body">
                                            <div class="d-flex flex-wrap">
                                                <div class="me-3">
                                                    <p class="text-muted mb-2">SBP Collections This year</p>
                                                    <h5 class="mb-0 fw-bold">KES 34,000</h5>
                                                </div>

                                                <div class="avatar-sm ms-auto">
                                                    <div class="avatar-title bg-light rounded-circle text-primary font-size-20">
                                                        <i class="mdi mdi-calendar-check-outline "></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-body border-top py-3">
                                            <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 8.41%</span> Target Margin</p>
                                        </div>
                                    </div>
                                </div><!--end col-->

                            </div>
                        </div>

                        <div class="col-sm-12 col-md-3 px-sm-30px">
                            <div class="card">

                                <div class="card-body">
                                    <h4 class="card-title mb-0">Applications By statuses</h4>
                                    <div id="application-statuses"></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-3 px-sm-30px">
                            <div class="card">

                                <div class="card-body">
                                    <h4 class="card-title mb-0">Certificate Statuses</h4>
                                    <div id="certificateStatus"></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-6 px-sm-30px">
                            <div class="card">

                                <div class="card-body">
                                    <h4 class="card-title mb-0">Revenue Perfomance</h4>
                                    <div id="revenuePerfomance"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- end row -->
                </div>
                <!-- container-fluid -->
            </div>
            <!-- End Page-content -->

            <!-- receipting modal -->
            <div class="modal fade receipting-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-full modal-fullscreen">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myLargeModalLabel">Business Details</h5>
                            <span
                                class="badge rounded-pill bg-success text-uppercase font-12px text-uppercase mx-3">Active
                                Certificate</span>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="hori-timeline mt-4">
                                        <div class="owl-carousel owl-theme  navs-carousel events timeline-carousel"
                                            id="timeline-carousel">
                                            <div class="item event-list">
                                                <div>
                                                    <div class="event-date">
                                                        <div class="text-primary mb-1">12 Sep 2023 10:09 AM</div>
                                                        <h5 class="mb-4">Application</h5>
                                                    </div>
                                                    <div class="event-down-icon">
                                                        <i
                                                            class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                                                    </div>

                                                    <div class="mt-3 px-3">
                                                        <p class="text-muted text-capitalize"><a
                                                                href="user-details.html">Kelvin Omondi</a></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item event-list">
                                                <div>
                                                    <div class="event-date">
                                                        <div class="text-primary mb-1">15 Sep 2023 12:59 AM</div>
                                                        <h5 class="mb-4">Details Verification</h5>
                                                    </div>
                                                    <div class="event-down-icon">
                                                        <i
                                                            class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                                                    </div>

                                                    <div class="mt-3 px-3">
                                                        <p class="text-muted text-capitalize"><a
                                                                href="user-details.html">By Kelvin Ouma</a></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item event-list">
                                                <div>
                                                    <div class="event-date">
                                                        <div class="text-primary mb-1">20 Sep 2023 08:23 AM</div>
                                                        <h5 class="mb-4">Premices Inspection</h5>
                                                    </div>
                                                    <div class="event-down-icon">
                                                        <i
                                                            class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                                                    </div>

                                                    <div class="mt-3 px-3">
                                                        <p class="text-muted text-capitalize"><a
                                                                href="user-details.html">By Alex Kinoti</a></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item event-list">
                                                <div>
                                                    <div class="event-date">
                                                        <div class="text-primary mb-1">23 sep 2023 08:23 AM</div>
                                                        <h5 class="mb-4">Approval Of Application</h5>
                                                    </div>
                                                    <div class="event-down-icon">
                                                        <i
                                                            class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                                                    </div>

                                                    <div class="mt-3 px-3">
                                                        <p class="text-muted text-capitalize"><a
                                                                href="user-details.html">By John King</a></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item event-list">
                                                <div>
                                                    <div class="event-date">
                                                        <div class="text-primary mb-1">23 sep 2023 08:25 AM</div>
                                                        <h5 class="mb-4">issueance Of Certifcate</h5>
                                                    </div>
                                                    <div class="event-down-icon">
                                                        <i
                                                            class="bx bxs-check-circle h1 text-success down-arrow-icon"></i>
                                                    </div>

                                                    <div class="mt-3 px-3">
                                                        <p class="text-muted text-capitalize"><a
                                                                href="user-details.html">By John King</a></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item event-list active">
                                                <div>
                                                    <div class="event-date">
                                                        <div class="text-primary mb-1">By 31 Dec 2023 12:00 AM</div>
                                                        <h5 class="mb-4">Renewal</h5>
                                                    </div>
                                                    <div class="event-down-icon">
                                                        <i
                                                            class="bx bx-down-arrow-circle h1 text-info down-arrow-icon"></i>
                                                    </div>

                                                    <div class="mt-3 px-3">
                                                        <p class="text-muted text-capitalize"><a
                                                                href="user-details.html">-</a></p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-4">
                                    <div class="row">
                                        <div class="col-12 mt-4">
                                            <div class="bg-success border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                                                <i class="bx bx-certification font-28 mr-15px"></i>
                                                <p class="fw-semibold mb-0 pb-0">Certificate details</p>

                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="table-responsive">
                                                <table
                                                    class="table table-nowrap vertical-align-middle table-striped table-sm">
                                                    <tbody>
                                                        <tr
                                                            title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Serial
                                                                    No.</p>
                                                            </td>
                                                            <td class="">12345</td>

                                                        </tr>

                                                        <tr
                                                            title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Last Paid for</p>
                                                            </td>
                                                            <td class="">12 Jan 2023</td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Expiry
                                                                    Date</p>

                                                            </td>
                                                            <td class="">31 Dec 2023</td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Days
                                                                    to expiry</p>

                                                            </td>
                                                            <td class="">204 Days</td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Printing status</p>

                                                            </td>
                                                            <td class="">Printed</td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Amount
                                                                    Paid</p>

                                                            </td>
                                                            <td class="text-uppercase text-black fw-semibold">KES 25,000
                                                            </td>

                                                        </tr>




                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-4">
                                    <div class="row">
                                        <div class="col-12 mt-4">
                                            <div class="bg-info border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                                                <i class="bx bx-briefcase-alt-2 font-28 mr-15px"></i>
                                                <p class="fw-semibold mb-0 pb-0">Business Details</p>

                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="table-responsive">
                                                <table
                                                    class="table table-nowrap vertical-align-middle table-striped table-sm">
                                                    <tbody>
                                                        <tr
                                                            title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Business
                                                                    Name</p>
                                                            </td>
                                                            <td class="">Wireless Electronics</td>

                                                        </tr>

                                                        <tr
                                                            title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Certificate of Incoporation No. </p>
                                                            </td>
                                                            <td class="">1234557768</td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">KRA
                                                                    Pin
                                                                    No.</p>

                                                            </td>
                                                            <td class="">12345</td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">VAT
                                                                    No.
                                                                </p>

                                                            </td>
                                                            <td class="">12345</td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Business
                                                                    Activity</p>

                                                            </td>
                                                            <td class="">Accomodation and Catering</td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Business
                                                                    Sub category</p>

                                                            </td>
                                                            <td class="">Small Lodging House</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-4">
                                    <div class="row">
                                        <div class="col-12 mt-4">
                                            <div class="bg-warning border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                                                <i class="bx bxs-user-pin font-28 mr-15px"></i>
                                                <p class="fw-semibold mb-0 pb-0">Owner Details</p>

                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="table-responsive">
                                                <table
                                                    class="table table-nowrap vertical-align-middle table-striped table-sm">
                                                    <tbody>
                                                        <tr
                                                            title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Owner's Full Names</p>
                                                            </td>
                                                            <td class="">Mr Alex Wanjala Akinyi</td>

                                                        </tr>

                                                        <tr
                                                            title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    ID/PPT No.</p>
                                                            </td>
                                                            <td class="">1234557768</td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Owner's Fax</p>

                                                            </td>
                                                            <td class="">12345</td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Owner's Mobile No.</p>

                                                            </td>
                                                            <td class=""><a href="tel:0704549859">0704549859</a></td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Alternative Mobile No.</p>

                                                            </td>
                                                            <td class=""><a href="tel:0704549859">0704549859</a></td>

                                                        </tr>



                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Postal
                                                                    Address</p>

                                                            </td>
                                                            <td class="">12-1004 Nairobi</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div class="col-sm-12 col-md-4">
                                    <div class="row">
                                        <div class="col-12 mt-4">
                                            <div class="bg-danger border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                                                <i class="bx bx-phone-call pin font-28 mr-15px"></i>
                                                <p class="fw-semibold mb-0 pb-0">Location and Contact information</p>

                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="table-responsive">
                                                <table
                                                    class="table table-nowrap vertical-align-middle table-striped table-sm">
                                                    <tbody>
                                                        <tr
                                                            title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Business Mobile No.</p>
                                                            </td>
                                                            <td class=""><a href="tel:0704549859">0704549859</a></td>

                                                        </tr>

                                                        <tr
                                                            title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Alternative Phone No</p>
                                                            </td>
                                                            <td class=""><a href="tel:0704549859">0704549859</a></td>

                                                        </tr>



                                                        <tr
                                                            title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Business Email address</p>
                                                            </td>
                                                            <td class=""><a
                                                                    href="mailto:email@email.com">email@email.com</a>
                                                            </td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold"> Sub
                                                                    county</p>

                                                            </td>
                                                            <td class="">Homabay Town Sub county</td>

                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">Ward
                                                                </p>

                                                            </td>
                                                            <td class=""><a href="tel:0704549859">Rodi Township Ward</a>
                                                            </td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Physical address/Street</p>

                                                            </td>
                                                            <td class=""><a href="tel:0704549859">Along Moi Avenue
                                                                    opposite cooperative Bank</a></td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Building Name</p>

                                                            </td>
                                                            <td class="">ALexis complex</td>

                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <p class="the-bill-item mb-0 p-0 m-0 fw-semibold">
                                                                    Stall/Room No.</p>

                                                            </td>
                                                            <td class="">122</td>

                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div class="col-sm-12 col-md-8">
                                    <div class="row">
                                        <div class="col-12 mt-4">
                                            <div class="bg-dark border-2 bg-soft p-2 mb-4 d-flex align-items-center">
                                                <i class="bx bx-map font-28 mr-15px"></i>
                                                <p class="fw-semibold mb-0 pb-0">Map View</p>

                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div>
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46449.71551863634!2d36.67523836781685!3d-1.3353441122372378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0cb9ff59a4a3%3A0x4073419e11826405!2sOrbital%20Africa%20%7C%20Land%20%26%20Topo%20Survey%2C%20GPS%2C%20GPR%2C%20GIS%2C%20Mapping%2C%20Drones%2C%20Training%20%26%20Geospatial%20Solutions!5e0!3m2!1sen!2ske!4v1691859398886!5m2!1sen!2ske" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">

                            <a href="PrintDocs/Trade-Permit/permit.html" target="_blank" type="button"
                                class="btn btn-primary waves-effect waves-light">
                                <i class="mdi mdi-printer font-size-16 align-middle me-2"></i> Print Certificate
                            </a>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- end of receipting modal -->

            <!-- invoice details -->
            <div class="modal fade invoice-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="myLargeModalLabel">Invoice Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="col-12">
                                <address>
                                    <strong>Billed To:</strong><br>
                                    Kelvin Njuguna<br>
                                    email@mail.com, 0704 549 859<br>
                                    Hse No. 410, 90 Degrees By Tsavo
                                    <br><br>
                                    1 Mar 2022, 10:20 AM
                                </address>
                            </div>
                            <div class="col-12">
                                <div class="py-2 mt-3">
                                    <h3 class="font-size-15 fw-bold">Invoice Details ( <span
                                            class="text-primary fw-medium">No. 1237</span> )</h3>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="table-responsive">
                                    <table class="table table-nowrap">
                                        <thead>
                                            <tr>
                                                <th style="width: 70px;">No.</th>
                                                <th>Item</th>
                                                <th class="text-end">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td>Rent Deposit</td>
                                                <td class="text-end">KES 24,500</td>
                                            </tr>

                                            <tr>
                                                <td>02</td>
                                                <td>Monthly Rent</td>
                                                <td class="text-end">KES 12,000</td>
                                            </tr>

                                            <tr>
                                                <td>03</td>
                                                <td>TAX (18%)</td>
                                                <td class="text-end">KES 250</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="text-end">Total</td>
                                                <td class="text-end fw-bold">KES 36,750</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="text-end">Paid</td>
                                                <td class="text-end  fw-bold">KES 0.00</td>
                                            </tr>

                                            <tr>
                                                <td colspan="2" class="border-0 text-end">
                                                    <strong>Balance</strong>
                                                </td>
                                                <td class="border-0 text-end">
                                                    <h5 class="m-0 text-uppercase fw-bold">KES 36,750</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <div class="col-12 d-none">
                                <div class="table-resposive p-4 px-2 pt-2 overflow-visible">
                                    <table class="w-100">
                                        <tbody>
                                            <tr data-id="1">
                                                <td>
                                                    <label for="" class="">Payment Method</label>
                                                    <select class="form-control selectpicker w-100 payment-method"
                                                        data-style="btn-secondary w-100" data-live-search="true"
                                                        title="Select payment Method">
                                                        <option value="Mpesa">MPESA</option>
                                                        <option value="Cash">CASH</option>
                                                    </select>
                                                </td>
                                                <td class="px-3 ">
                                                    <div class="phone-num d-none">
                                                        <label for="">Phone No.</label>
                                                        <input type="text " class="form-control w-100 d-flex "
                                                            placeholder="Phone No." spellcheck="false"
                                                            data-ms-editor="true">
                                                    </div>

                                                </td>
                                                <td class="px-3">
                                                    <label for="">Amount To Be Paid</label>
                                                    <input type="text " class="form-control w-100 d-flex"
                                                        placeholder="KES" spellcheck="false" data-ms-editor="true">

                                                </td>
                                                <td class="text-right float-right">
                                                    <div class="d-flex flex-column">
                                                        <label class="opacity-0">Something</label>
                                                        <a href="#"
                                                            class="btn btn-primary w-md waves-effect waves-light">Submit</a>
                                                    </div>
                                                </td>


                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                            <div class="float-end">
                                <a href="javascript:window.print()"
                                    class="btn btn-success waves-effect waves-light me-1"><i
                                        class="mdi mdi-printer font-16px"></i></a>
                                <a href="javascript: void(0);"
                                    class="btn btn-primary w-md waves-effect waves-light">Receive Payment</a>
                            </div>
                        </div>

                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- invoice details -->

            <footer class="footer ">
                <div class="container-fluid ">
                    <div class="row ">
                        <div class="col-sm-6 ">

    </div>
    <div class="col-sm-6 ">
        <div class="text-sm-end d-sm-block ">
           County Government
        </div>
    </div>
    </div>
    </div>
    </footer>
    </div>
    <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay "></div>




    </body>


</template>

<script>
    /* eslint-disable */
    import NavigationBar from "@/components/Navigation";
    import ToolBar from "@/components/sbp/ToolBar";
    export default {
        name: "sbpDashboard",
        components: {ToolBar, NavigationBar},
        mounted() {
            this.activeVsExpired()
            this.revenuePerformance()
            this.applicationStatus()
        },

        methods: {
            applicationStatus(){
                // JavaScript code inside the <script> tag
                document.addEventListener('DOMContentLoaded', function () {
                    // Generate random values for the categories
                    const randomValues = {
                        initiated: Math.floor(Math.random() * 100),
                        pendingVerification: Math.floor(Math.random() * 100),
                        pendingInspection: Math.floor(Math.random() * 100),
                        pendingCertification: Math.floor(Math.random() * 100)
                    };

                    // Create the half donut chart with links and custom font
                    Highcharts.chart('application-statuses', {
                        chart: {
                            type: 'pie',
                            style: {
                                fontFamily: 'Montserrat' // Set font family
                            }
                        },
                        title: {
                            text: null
                        },
                        plotOptions: {
                            pie: {
                                innerSize: '50%', // Make it a half donut
                                depth: 45, // Increase the depth for a 3D effect
                                dataLabels: {
                                    style: {
                                        fontFamily: 'Montserrat' // Set font family
                                    }
                                }
                            }
                        },
                        series: [{
                            name: 'Applications',
                            data: [
                                { name: 'Initiated', y: randomValues.initiated, link: 'https://example.com/initiated' },
                                { name: 'Pending Verification', y: randomValues.pendingVerification, link: 'https://example.com/pending-verification' },
                                { name: 'Pending Inspection', y: randomValues.pendingInspection, link: 'https://example.com/pending-inspection' },
                                { name: 'Pending Certification', y: randomValues.pendingCertification, link: 'https://example.com/pending-certification' }
                            ],
                            point: {
                                events: {
                                    click: function () {
                                        // Open the link when the slice is clicked
                                        window.open(this.link, '_blank');
                                    }
                                }
                            }
                        }]
                    });
                });

            },
            revenuePerformance(){
                // Your chart generation code will go here
                document.addEventListener('DOMContentLoaded', function () {
                    // Abbreviate months to three letters
                    function abbreviateMonth(month) {
                        return month.substring(0, 3);
                    }

                    // Prepare the data
                    const data = [
                        ['Jul 2023', 50000, 60000, 55000], // [Month, Last Year, Target, Actual]
                        ['Aug 2023', 55000, 62000, 58000],
                        ['Sep 2023', 52000, 61000, 56000],
                        ['Oct 2023', 53000, 63000, 57000],
                        ['Nov 2023', 54000, 59000, 56000],
                        ['Dec 2023', 60000, 65000, 62000],
                        ['Jan 2024', 58000, 67000, 59000],
                        ['Feb 2024', 59000, 68000, 60000],
                        ['Mar 2024', 61000, 70000, 62000],
                        ['Apr 2024', 60000, 69000, 61000],
                        ['May 2024', 62000, 72000, 63000],
                        ['Jun 2024', 63000, 71000, 64000]
                    ];

                    // Set the font family to Montserrat
                    Highcharts.setOptions({
                        chart: {
                            style: {
                                fontFamily: 'Montserrat, sans-serif'
                            }
                        }
                    });

                    // Create the bar chart
                    Highcharts.chart('revenuePerfomance', {
                        chart: {
                            type: 'column'
                        },
                        title: {
                            text: null
                        },
                        xAxis: {
                            categories: data.map(item => abbreviateMonth(item[0]))
                        },
                        yAxis: {
                            title: {
                                text: 'Revenue (KES)'
                            }
                        },
                        legend: {
                            enabled: true
                        },
                        tooltip: {
                            shared: true,
                            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>KES {point.y}</b><br/>'
                        },
                        plotOptions: {
                            bar: {
                                pointWidth: 20, // Adjust the width of each column
                                stacking: 'normal', // Prevent stacking
                                borderWidth: 0
                            }
                        },
                        series: [{
                            name: 'Last Year',
                            data: data.map(item => item[1])
                        }, {
                            name: 'Target',
                            data: data.map(item => item[2])
                        }, {
                            name: 'This Year',
                            data: data.map(item => item[3])
                        }]
                    });
                });

            },
            activeVsExpired(){

                Highcharts.setOptions({
                    chart: {
                        style: {
                            fontFamily: 'Montserrat, sans-serif'
                        }
                    },
                    labels: {
                        style: {
                            fontSize: '14px' // Adjust label font size
                        }
                    }
                });
                // Your chart generation code will go here
                document.addEventListener('DOMContentLoaded', function () {
                    // Create the pie chart
                    var pieColors = ['#FF0000', '#00FF00']; // Red for expired, Green for active

                    Highcharts.chart('certificateStatus', {
                        chart: {
                            type: 'pie'
                        },
                        title: {
                            text: null
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                                }
                            }
                        },
                        series: [{
                            name: 'All SBP Certificates',
                            colorByPoint: true,
                            colors: pieColors,
                            data: [{
                                name: 'Expired',
                                y: 30,
                                drilldown: 'expired'
                            }, {
                                name: 'Active',
                                y: 70,
                                drilldown: 'active'
                            }]
                        }],
                        drilldown: {
                            series: [{
                                name: 'Expired Certificates',
                                id: 'expired',
                                data: [
                                    ['Homabay Town', 10],
                                    ['Rachuonyo North', 5],
                                    ['Suba North', 3],
                                    ['Rachuonyo South', 4],
                                    ['Rachuonyo East', 8],
                                    ['Ndhiwa', 6],
                                    ['Suba South', 2],
                                    ['Rangwe', 7],
                                    ['Homa Bay Hq', 5]
                                ]
                            }, {
                                name: 'Active Certificates',
                                id: 'active',
                                data: [
                                    ['Homabay Town', 50],
                                    ['Rachuonyo North', 40],
                                    ['Suba North', 30],
                                    ['Rachuonyo South', 45],
                                    ['Rachuonyo East', 35],
                                    ['Ndhiwa', 25],
                                    ['Suba South', 20],
                                    ['Rangwe', 30],
                                    ['Homa Bay Hq', 60]
                                ]
                            }]
                        }
                    });
                });

            }

        }


    }
</script>

<style scoped>

</style>