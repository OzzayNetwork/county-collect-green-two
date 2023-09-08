<template>


<!-- index.html   13:53:02 GMT -->

<head>

    <meta charset="utf-8" />
    <title>NTSA | Keep Our Roads safe</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Keep your finances and membership up to date" name="description" />
    <meta content="Kelvin Njuguna Ndungu" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.svg">
    <!-- droping file -->
    <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css" />

    <link href="assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/spectrum-colorpicker2/spectrum.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="assets/libs/%40chenfengyuan/datepicker/datepicker.min.css">

    <!-- DataTables -->
    <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet" type="text/css" />

    <!-- Bootstrap Css -->
    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Bootstrap select styling -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
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
                                <h4 class="mb-sm-0 font-size-18">Rent Arears</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                        <li class="breadcrumb-item active">Rent Arears</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header bg-white pt-0 pr-0 p-0 d-flex justify-content-between align-items-center w-100 border-bottom">

                                    <div class="btn-toolbar p-3 d-flex justify-content-between align-items-center w-100" role="toolbar">
                                        <div>

                                            <div class="row m-0 p-0">
                                                <small class="mb-3 fw-semibold">Filter By</small>
                                                <div class="d-flex">
                                                    <select class="form-control selectpicker bg-white select-revenue" title="Select Estate" data-live-search="true">
                                                        <option value="All Wards">All wards</option>
                                                        <option value="acacia">Acacia Ward</option>
                                                        <option value="bluebell">Bluebell Ward</option>
                                                        <option value="cedar">Cedar Ward</option>
                                                        <option value="daisy">Daisy Ward</option>
                                                        <option value="elm">Elm Ward</option>
                                                    </select>



                                                    <select class="form-control selectpicker bg-white select-revenue mx-3" title="Filter By Subcounty" data-live-search="true">
                                                       <option value="All">All</option>
                                                       <option value="Male">Male</option>
                                                       <option value="Female">Female</option>
                                                    </select>

                                                    <select class="form-control selectpicker bg-white select-revenue" title="Select Ward" data-live-search="true">
                                                        <option value="African Traditional & Diasporic">African Traditional & Diasporic</option>
                                                        <option value="Agnostic">Agnostic</option>
                                                        <option value="Atheist">Atheist</option>
                                                        <option value="Baha'i">Baha'i</option>
                                                        <option value="Buddhism">Buddhism</option>
                                                        <option value="Cao Dai">Cao Dai</option>
                                                        <option value="Chinese traditional religion">Chinese traditional religion</option>
                                                        <option value="Christianity">Christianity</option>
                                                        <option value="Hinduism">Hinduism</option>
                                                        <option value="Islam">Islam</option>
                                                        <option value="Jainism">Jainism</option>
                                                        <option value="Juche">Juche</option>
                                                        <option value="Judaism">Judaism</option>
                                                        <option value="Neo-Paganism">Neo-Paganism</option>
                                                        <option value="Nonreligious">Nonreligious</option>
                                                        <option value="Rastafarianism">Rastafarianism</option>
                                                        <option value="Secular">Secular</option>
                                                        <option value="Shinto">Shinto</option>
                                                        <option value="Sikhism">Sikhism</option>
                                                        <option value="Spiritism">Spiritism</option>
                                                        <option value="Tenrikyo">Tenrikyo</option>
                                                        <option value="Unitarian-Universalism">Unitarian-Universalism</option>
                                                        <option value="Zoroastrianism">Zoroastrianism</option>
                                                        <option value="primal-indigenous">primal-indigenous</option>
                                                        <option value="Other">Other</option>
                                                    </select>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-auto col-auto d-flex d-none">
                                            <div class="mx-3">
                                                <input class="form-control" type="datetime-local" placeholder="Select A date" id="example-datetime-local-input">
                                            </div>
                                            <div class="text-sm-end">
                                                <select name='length_change' class="form-control selectpicker table-rows-selector show-tick btn btn-auto calendar-selecor" data-style="btn-success" data-live-search="true" title="Select a month">
                                                    <option value='5'>Jan 2021</option>
                                                    <option value='50' selected="true">Feb 2021</option>
                                                    <option value='100'>Mar 2021</option>
                                                    <option value='150'>Apr 2021</option>
                                                    <option value='200'>May 2021</option>
                                                    <option value='0'>Jun 2021</option>
                                                    <option value='0'>Jul 2021</option>
                                                    <option value='0'>Aug 2021</option>
                                                    <option value='0'>Sep 2021</option>
                                                    <option value='0'>Oct 2021</option>
                                                    <option value='0'>Nov 2021</option>
                                                    <option value='0'>Dec 2021</option>
                                                    <option value='0'>Jan 2022</option>
                                                    <option value='0'>Feb 2022</option>
                                                </select>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="btn-toolbar p-3 align-items-center d-none animated delete-tool-bar" role="toolbar">
                                        <button type="button" class="btn btn-primary waves-effect btn-label waves-light me-3"><i class="mdi mdi-printer label-icon"></i> Print Selected Invoices</button>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table align-middle table-striped table-nowrap table-hover dt-responsive contacts-table" id="datatable-buttons">
                                            <thead class="table-dark">
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Tenant</th>
                                                    <th scope="col">Estate</th>
                                                    <th scope="col">Hse No.</th>
                                                    <th class="text-right">Rent</th>
                                                    <th>paid Up To</th>
                                                    <th scope="col" class="text-right">Arears</th>

                                                    <th></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td class="text-capitalize">1.</td>
                                                    <td class="text-capitalize">
                                                        RISPER NDIRE OREJA
                                                    </td>
                                                    <td class="text-capitalize">
                                                        Bus Park
                                                    </td>
                                                    <td>
                                                        1/1A
                                                    </td>
                                                    <td class="text-black text-uppercase text-right">
                                                        <span class="text-info fw-semibold">KES 2,500</span>
                                                    </td>
                                                    <td>
                                                        March 2023
                                                    </td>
                                                    <td class="text-black text-uppercase text-right">
                                                        <span class="text-info fw-semibold">KES 7,500</span>
                                                    </td>

                                                    <td>
                                                        <button class="btn btn-primary btn-sm d-none" data-toggle="modal" data-target="#changeStream">Change Stream</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-capitalize">1.</td>
                                                    <td class="text-capitalize">
                                                        RISPER NDIRE OREJA
                                                    </td>
                                                    <td class="text-capitalize">
                                                        Bus Park
                                                    </td>
                                                    <td>
                                                        1/1A
                                                    </td>
                                                    <td class="text-black text-uppercase text-right">
                                                        <span class="text-info fw-semibold">KES 2,500</span>
                                                    </td>
                                                    <td>
                                                        March 2023
                                                    </td>
                                                    <td class="text-black text-uppercase text-right">
                                                        <span class="text-info fw-semibold">KES 7,500</span>
                                                    </td>

                                                    <td>
                                                        <button class="btn btn-primary btn-sm d-none" data-toggle="modal" data-target="#changeStream">Change Stream</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-capitalize">1.</td>
                                                    <td class="text-capitalize">
                                                        RISPER NDIRE OREJA
                                                    </td>
                                                    <td class="text-capitalize">
                                                        Bus Park
                                                    </td>
                                                    <td>
                                                        1/1A
                                                    </td>
                                                    <td class="text-black text-uppercase text-right">
                                                        <span class="text-info fw-semibold">KES 2,500</span>
                                                    </td>
                                                    <td>
                                                        March 2023
                                                    </td>
                                                    <td class="text-black text-uppercase text-right">
                                                        <span class="text-info fw-semibold">KES 7,500</span>
                                                    </td>

                                                    <td>
                                                        <button class="btn btn-primary btn-sm d-none" data-toggle="modal" data-target="#changeStream">Change Stream</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-capitalize">1.</td>
                                                    <td class="text-capitalize">
                                                        RISPER NDIRE OREJA
                                                    </td>
                                                    <td class="text-capitalize">
                                                        Bus Park
                                                    </td>
                                                    <td>
                                                        1/1A
                                                    </td>
                                                    <td class="text-black text-uppercase text-right">
                                                        <span class="text-info fw-semibold">KES 2,500</span>
                                                    </td>
                                                    <td>
                                                        March 2023
                                                    </td>
                                                    <td class="text-black text-uppercase text-right">
                                                        <span class="text-info fw-semibold">KES 7,500</span>
                                                    </td>

                                                    <td>
                                                        <button class="btn btn-primary btn-sm d-none" data-toggle="modal" data-target="#changeStream">Change Stream</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-capitalize">1.</td>
                                                    <td class="text-capitalize">
                                                        RISPER NDIRE OREJA
                                                    </td>
                                                    <td class="text-capitalize">
                                                        Bus Park
                                                    </td>
                                                    <td>
                                                        1/1A
                                                    </td>
                                                    <td class="text-black text-uppercase text-right">
                                                        <span class="text-info fw-semibold">KES 2,500</span>
                                                    </td>
                                                    <td>
                                                        March 2023
                                                    </td>
                                                    <td class="text-black text-uppercase text-right">
                                                        <span class="text-info fw-semibold">KES 7,500</span>
                                                    </td>

                                                    <td>
                                                        <button class="btn btn-primary btn-sm d-none" data-toggle="modal" data-target="#changeStream">Change Stream</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot class="table-dark">
                                                <tr>
                                                    <th scope="col" colspan="2">22 Tenants</th>
                                                    <th scope="col">22 Estates</th>
                                                    <th scope="col" colspan="">23 Units</th>
                                                    <th scope="col" colspan="" class="text-right">KES 45,900</th>
                                                    <th scope="col" colspan=""></th>
                                                    <th scope="col" class="text-right">KES 45,009,500</th>

                                                    <th></th>
                                                </tr>
                                            </tfoot>
                                            </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end col -->
                    </div>





                </div>
                <!-- container-fluid -->
            </div>
            <!-- End Page-content -->


            <!-- bootstrap modal -->
            <div class="modal fade" id="changeStream" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLongTitle">Change Revenue Stream</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div>
                                    <label class="form-label">Select New Revenue Stream</label>
                                    <select class="form-control selectpicker bg-white" title="Select Revenue Stream" data-live-search="true">
                                        <option value=" ">Failing to carry and produce a driving license on demand.</option>
                                        <option value=" ">Exceeding speed limit prescribed for class of vehicle by 1-5 KPH</option>
                                        <option value=" ">Exceeding speed limit prescribed for class of vehicle by 6-10 KPH</option>
                                        <option value=" ">Exceeding speed limit prescribed for class of vehicle by 11-15 KPH</option>
                                        <option value=" ">Exceeding speed limit prescribed for class of vehicle by 16-20 KPH</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary w-100 text-center">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            <!-- end of changing revenue stream modal -->


            <footer class="footer ">
                <div class="container-fluid ">
                    <div class="row ">
                        <div class="col-sm-6 ">
                               <!-- <script>
                                    document.write(new Date().getFullYear())
                                </script>--> © Best Birdy
    </div>
    <div class="col-sm-6 ">
        <div class="text-sm-end d-sm-block ">
            Best Birdy Billing system.
        </div>
    </div>
    </div>
    </div>
    </footer>
    </div>
    <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->

    </body>


</template>

<script>

    import NavigationBar from "@/components/Navigation";
    export default {
        name: "RentalsHouses",
        components: {NavigationBar}
    }
</script>

<style scoped>

</style>