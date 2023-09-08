<template>
<div>
  <head>
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.svg">

    <link href="assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />

    <link href="assets/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/spectrum-colorpicker2/spectrum.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/bootstrap-timepicker/css/bootstrap-timepicker.min.css" rel="stylesheet" type="text/css">
    <link href="assets/libs/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="assets/libs/%40chenfengyuan/datepicker/datepicker.min.css">



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

  <!-- <body data-layout="horizontal" data-topbar="dark"> -->
  <!-- Loader -->
<!--  <div id="preloader">
    <div id="status">
      <div class="spinner-chase">
        <div class="chase-dot"></div>
        <div class="chase-dot"></div>
        <div class="chase-dot"></div>
        <div class="chase-dot"></div>
        <div class="chase-dot"></div>
        <div class="chase-dot"></div>
      </div>
    </div>
  </div>-->
  <!-- Begin page -->

  <!-- Begin page -->
  <div id="layout-wrapper">

    <NavigationBar/>

    <!-- Editing bill details -->
    <div class="modal fade " id="editModal" data-backdrop="static" data-keyboard="false" tabindex="-1 " role="dialog " aria-labelledby="staticBackdropLabel " aria-hidden="true ">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content ">
          <div class="modal-header border-bottom-0 ">
            <h4>Edit Bill item details</h4>
            <button type="button " class="btn-close " data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body ">
            <div class="row">
              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">Income Type</label>
                  <select class="form-control selectpicker bg-white" title="Select Traffic offence" data-live-search="true" >
                    <option value=" ">Failing to carry and produce a driving license on demand.</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 1-5 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 6-10 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 11-15 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 16-20 KPH</option>
                  </select>
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">Account Name</label>
                  <select class="form-control selectpicker bg-white" title="Select Traffic offence" data-live-search="true">
                    <option value=" ">Failing to carry and produce a driving license on demand.</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 1-5 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 6-10 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 11-15 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 16-20 KPH</option>
                  </select>
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">Sub County</label>
                  <select class="form-control selectpicker bg-white" title="Select Traffic offence" data-live-search="true">
                    <option value=" ">Failing to carry and produce a driving license on demand.</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 1-5 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 6-10 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 11-15 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 16-20 KPH</option>
                  </select>
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">Ward</label>
                  <select class="form-control selectpicker bg-white" title="Select Traffic offence" data-live-search="true">
                    <option value=" ">Failing to carry and produce a driving license on demand.</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 1-5 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 6-10 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 11-15 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 16-20 KPH</option>
                  </select>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">Details</label>
                  <textarea name="" id="" cols="30" rows="3" placeholder="More details" class="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex">
            <button class="btn btn-primary flex-grow-1">Done</button>
            <button class="btn btn-light" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- edditing bill item details -->

    <!-- Offender email address -->
    <div class="modal fade " id="subscribeModal" data-backdrop="static" data-keyboard="false" tabindex="-1 " role="dialog " aria-labelledby="staticBackdropLabel " aria-hidden="true ">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content ">
          <div class="modal-header border-bottom-0 ">
            <button type="button " class="btn-close d-none" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body ">
            <div class="text-center mb-4 ">
              <div class="avatar-md mx-auto mb-4 ">
                <div class="avatar-title bg-light rounded-circle text-primary h1 ">
                  <i class="mdi mdi-card-account-phone-outline "></i>
                </div>
              </div>

              <div class="row justify-content-center ">
                <div class="col-xl-10 ">
                  <h4 class="text-primary ">Client's Phone No.</h4>
                  <p class="text-muted font-size-14 mb-4 ">
                    Enter the client's Phone Number to continue.
                  </p>

                  <form>
                    <div class="row ">
                      <div class="col-12 ">
                        <div class="mb-3 ">
                          <label for="digit1-input " class="visually-hidden ">ID Number</label>
                          <input type="text " class="form-control form-control-lg text-center two-step " placeholder="ID / PPT No. ">
                        </div>
                      </div>
                    </div>
                    <button data-dismiss="modal" type="button" class="btn btn-primary btn-block w-100 ">
                      <i class="bx bx-search-alt-2 font-size-16 align-middle me-2 "></i>
                      Search
                    </button>

                    <!-- this is to be hidden afte rimplimenting it. It s meannt to be shown incase the said user is not yet registered -->
                    <button  data-toggle="modal" data-target="#registerCustomer" data-dismiss="modal" type="button" class="btn btn-light btn-block w-100  mt-3">
                      Register User
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Offender's email address -->

    <!-- customer registration -->
    <div class="modal fade " id="registerCustomer" data-backdrop="static" data-keyboard="false" tabindex="-1 " role="dialog " aria-labelledby="staticBackdropLabel " aria-hidden="true ">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content ">
          <div class="modal-header border-bottom-0 ">
            <button type="button " class="btn-close d-none" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body ">
            <div class="text-center mb-4 ">
              <div class="avatar-md mx-auto mb-4 ">
                <div class="avatar-title bg-light rounded-circle text-primary h1 ">
                  <i class="mdi mdi-account-multiple-plus "></i>
                </div>
              </div>

              <div class="row justify-content-center ">
                <div class="col-xl-10 ">
                  <h4 class="text-primary text-capitalize">New Client Registration</h4>
                  <p class="text-muted font-size-14 mb-4 ">
                    Fuill In the details below to continue
                  </p>

                  <form>
                    <div class="row ">
                      <div class="col-12 ">
                        <div class="mb-3 ">
                          <label for="digit1-input " class="visually-hidden ">First Name</label>
                          <input type="text " class="form-control  text-center two-step " placeholder="First Name">
                        </div>
                      </div>

                      <div class="col-12 ">
                        <div class="mb-3 ">
                          <label for="digit1-input " class="visually-hidden ">Other Names</label>
                          <input type="text " class="form-control  text-center two-step " placeholder="Other Name(s)">
                        </div>
                      </div>

                      <div class="col-12 ">
                        <div class="mb-3 ">
                          <label for="digit1-input " class="visually-hidden ">Phone Number</label>
                          <input type="text " class="form-control  text-center two-step " placeholder="Phone Number">
                        </div>
                      </div>
                    </div>
                    <button data-dismiss="modal" type="button" class="btn btn-success btn-block w-100 ">
                      <i class="mdi-account-multiple-plus mdi font-size-16 align-middle me-2 "></i>
                      Register Client
                    </button>


                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- customer registration -->

    <!-- payment modal -->
    <div class="modal fade" id="payment-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-bs-labelledby="exampleModalCenterTitle" aria-bs-hidden="true" data-bs-keyboard="false" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header d-none">
            <span class="badge badge-soft-success text-uppercase badge font-12px bg-primary-blink text-white">Receive Payment</span>


            <button type="button" class="btn btn-light position-relative p-0 avatar-xs rounded-circle close-modal" data-dismiss="modal"  aria-label="Close">
                        <span class="avatar-title bg-transparent text-reset font-18px">
                            <i class="bx bx-x"></i>
                        </span>
            </button>

          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-between align-items-center">
              <span class="badge  badge-soft-success text-uppercase badge font-12px bg-primary-blink text-white">Receive Payment</span>


              <button type="button" class="btn btn-light position-relative p-0 avatar-xs rounded-circle pull-right close-modal" data-dismiss="modal" aria-label="Close">
                        <span class="avatar-title bg-transparent text-reset font-18px">
                            <i class="bx bx-x"></i>
                        </span>
              </button>
            </div>

            <div class="payment-panel-parent">

              <div v-if="paymentPanel" class="text-center payment-active-panel d-flex flex-column justify-content-around align-items-center sent-success payment-panel">
                <div class="success-image mb-4 pb-4 pt-4">
                  <img src="assets/images/bills.svg" height="200" alt="">
                </div>
                <h4 class="text-black fw-bold">{{message}}</h4>
                <p class="text-muted mb-4">The bill has been created Successfully, you can print the bill or opt to receive payment for this bill.</p>
                <div class="d-flex w-100 pb-2">
                  <button @click="showPaymentMethod()" type="button" class="btn btn-primary btn-block  me-3 flex-grow-1">
                    <i class="mdi-cash-check mdi font-size-16 align-middle me-2 "></i>
                    Receive Payment
                  </button>
                  <a @click="printBill()" target="_blank" data-dismiss="" type="button" class="btn btn-outline-secondary waves-effect dismin-modal">Print Bill</a>
                </div>
              </div>

              <div v-if="paymentMethod" class="send-method payment-panel ">
                <label for="" class="mb-0 pb-0">Payment Method</label>
                <p><small class="text-muted">How would you like to send this money?</small></p>

                <div>
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button fw-medium" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <div class="flex-shrink-0 me-3">
                            <img class="rounded-circle" src="assets/images/users/mpesa.jpg" alt="Mobile Money" height="65">
                          </div>
                          <div class="d-flex flex-column">
                            <p class="m-0 p-0 text-uppercase fw-semibold">MPESA</p>
                            <p class="mb-0 p-0"> <small>A payment request will be sent directly to the customer</small></p>
                          </div>
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <div>
                            <p>
                                A payment request of <strong class="text-black">KES {{billDetails.billBalance}}</strong> will be sent to the MPESA number you enter below.
                            </p>
                          </div>
                          <div class="form-group">
                            <label for="">MPESA Number</label>
                            <div class="form-floating mb-3">
                              <input v-model="  phoneNumber" type="text" class="form-control font-21 text-success form-control-lg" id="phone-input" placeholder="Enter Name">
                              <label for="floatingnameInput">Phone No.</label>
                            </div>

                            <button @click="showTransactionSummary('MPESA')" type="button" class="btn btn-primary btn-block  me-3 flex-grow-1">
                              <i class="mdi-cash-check mdi font-size-16 align-middle me-2 "></i>
                              Send Payment Request
                            </button>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button fw-medium collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <div class="flex-shrink-0 me-3">
                            <img class="rounded-circle" src="assets/images/users/money.jpg" alt="Mobile Money" height="65">
                          </div>
                          <div class="d-flex flex-column">
                            <p class="m-0 p-0 text-uppercase fw-semibold">Cash</p>
                            <p class="mb-0 p-0"> <small>By selecting this option you confirm that you have received the payment inform of cash</small></p>

                          </div>
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">

                          <div class="form-check form-check-primary mb-3">
                            <input v-model="confirmCash" class="form-check-input" type="checkbox" id="confirm-cash">
                            <label class="form-check-label" for="confirm-cash">
                              Confirm having received <strong>KES {{billDetails.billBalance}}</strong>
                            </label>
                          </div>

                          {{message}}
                          <br/>
                          <button v-if="confirmCash" @click="showTransactionSummary('CASH')"  type="button" class="btn btn-primary btn-block  me-3 flex-grow-1">
                            <i class="mdi-cash-check mdi font-size-16 align-middle me-2 "></i>
                            Receive Cash Payment
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="transactionSummary" class="transaction-summary payment-panel">
                <label for="">Transaction Breakdown</label>
                <div class="border p-4 rounded ">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="text-muted ">
                        BillO NO.
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end">
                      <div class=" text-right text-black">
                        {{billDetails.billNo}}
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="text-muted mt-2">
                        Bill For
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end">
                      <div class=" text-right text-black">
                        {{billDetails.incomeTypeDescription}}
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="text-muted mt-2">
                        Payment Method
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end">
                      <div class=" text-right text-black">
                        {{paymentData.paymentMode}}
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="text-muted mt-2">
                        Transaction Amount
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end">
                      <div class=" text-right text-black">
                        KES {{billDetails.billBalance}}
                      </div>
                    </div>


                    <div class="col-12 text-black"><hr class="mb-0 pb-0"></div>

                    <div class="col-lg-6 text-uppercase">
                      <div class="text-muted mt-2 font-21">
                        Total
                      </div>
                    </div>

                    <div class="col-lg-6 align-self-end text-uppercase">
                      <div class=" text-right text-black font-21 fw-bold">
                        KES {{billDetails.billBalance}}
                      </div>
                    </div>
                  </div>

                  <div class="mpesa-confirmation ">
                    <div v-if="paymentData.paymentMode=='MPESA'">
                      <p class="text-muted mt-2">A payment request of <strong class="text-black">KES {{billDetails.billBalance}}</strong> will be sent to <strong class="text-black"> phone number ({{ phoneNumber }})</strong> soon after you click the <strong class="text-black text-capitalize">Send Request</strong> button bellow.
                        <br>
                        <br>
                        Remember to <strong class="text-black">Check your phone</strong> to confirm payment by entering your Mpesa pin.</p>
                    </div>

                      <div>{{message}}  </div>
                    <br>
                    <button @click="makePayment()" class="btn btn-primary btn-flex flex-grow-1 waves-effect btn-send waves-light text-center w-100">
                      <div class="d-flex justify-content-center align-items-center">
                        <div class="stk-timer-container d-none justify-content-center align-items-center">
                          <span class="mdi mdi-timer-outline font-16px"></span>
                          <span class="stk-timer px-2"></span>
                        </div>
                        <div class="justify-content-center align-items-center d-flex">
                          <span class="px-2">Send Request</span>
                          <div class="flip-x"><i class="mdi mdi-reply ms-3 font-16px"></i></div>
                        </div>
                      </div>
                    </button>
                  </div>


                </div>
              </div>

              <div v-if="transactionCompleted" class="text-center d-flex flex-column justify-content-around align-items-center sent-success payment-panel">
                <div class="success-image mb-4">
                  <img src="assets/images/payment-confirmation-images/sent.svg" height="200" alt="">
                </div>
                <h4 class="text-blink-primary fw-bold">Transaction Complete</h4>
                <p class="text-muted mb-4"><strong class="text-black">KES {{receiptDetails.receiptAmount}}</strong> has been received for <strong class="text-black">Bill No. {{receiptDetails.billNo}}</strong></p>
                <button @click="printReceipt()" type="button" class="btn btn-primary btn-block  me-3 flex-grow-1">
                  <i class="mdi-cash-check mdi font-size-16 align-middle me-2 "></i>
                  Print Receipt
                </button>
              </div>



            </div>
          </div>
          <div class="modal-footer d-flex d-none bill-modal-footer">
            <button href="javascript: void(0);" disabled class="btn btn-outline-light waves-effect waves-light payment-prev"> <i class="mdi mdi-arrow-left ms-1"></i>Previouse</button>
            <button href="javascript: void(0);" class="btn btn-primary waves-effect waves-light payment-next">Next <i class="mdi mdi-arrow-right ms-1"></i></button>
            <button href="javascript: void(0);" class="btn btn-primary btn-flex flex-grow-1 waves-effect waves-light text-center d-none">
              <div class="d-flex justify-content-center align-items-center"> <span>Send Money</span> <div class="flip-x"><i class="mdi mdi-reply flip-x ms-3 font-16px"></i></div></div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- end of payment modal -->

    <!-- new food hygine -->
    <div class="modal fade" id="new-food-hygene" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-capitalize" id="exampleModalLongTitle">Food hygine Certificate Application</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Business ID</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter Business ID">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Business Name</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter Business Name">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">PIN Number</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="KRA Pin Number">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Plot Number</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter plot Number">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Phone Number</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter phone No.">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Email Address</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="email@email.com">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">PO Box</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter phone No.">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Town</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="email@email.com">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">Sub County</label>
                  <select class="form-control selectpicker bg-white" title="Select Traffic offence" data-live-search="true" >
                    <option value=" ">Failing to carry and produce a driving license on demand.</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 1-5 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 6-10 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 11-15 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 16-20 KPH</option>
                  </select>
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">Ward</label>
                  <select class="form-control selectpicker bg-white" title="Select Traffic offence" data-live-search="true" >
                    <option value=" ">Failing to carry and produce a driving license on demand.</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 1-5 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 6-10 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 11-15 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 16-20 KPH</option>
                  </select>
                </div>
              </div>

              <div class="col-xl-12 col-sm-12">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4 text-capitalize">Check where necessary</h5>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="formRadios" id="formRadios1" checked="">
                    <label class="form-check-label" for="formRadios1">
                      This application has been approved
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="formRadios" id="formRadios2">
                    <label class="form-check-label" for="formRadios2">
                      This application is provisional
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary w-100">Create Certificate</button>
          </div>
        </div>
      </div>
    </div>
    <!-- new food hygiene -->
    <!-- new food handler certiifictae application -->
    <div class="modal fade" id="new-food-handler" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-capitalize" id="exampleModalLongTitle">Food Handler Certificate Application</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter first name">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Other Name(s)</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter Other Names">
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">ID Number</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter ID Number">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Phone Number</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter phone No.">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Email Address</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="email@email.com">
                </div>
              </div>



              <div class="col-xl-12 col-sm-12">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4 text-capitalize">Gender</h5>
                  <div class="d-flex">
                    <div class="form-check mb-3 pr-4">
                      <input class="form-check-input" type="radio" name="Gender" id="gender-male" checked="">
                      <label class="form-check-label" for="gender-male">
                        Male
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="Gender" id="gender-female">
                      <label class="form-check-label" for="gender-female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">Sub County</label>
                  <select class="form-control selectpicker bg-white" title="Select Applicant's subcounty" data-live-search="true" >
                    <option value=" ">Failing to carry and produce a driving license on demand.</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 1-5 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 6-10 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 11-15 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 16-20 KPH</option>
                  </select>
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">Ward</label>
                  <select class="form-control selectpicker bg-white" title="Select Applicant's Ward" data-live-search="true" >
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
            <button type="button" class="btn btn-primary w-100">Create license</button>
          </div>
        </div>
      </div>
    </div>
    <!-- new food handlers certifacate application -->

    <!-- new business application -->
    <div class="modal fade" id="new-business" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-capitalize" id="exampleModalLongTitle">SBP Licenses Application</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body steps-container">
            <div class="row the-step biz-info active">
              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Business Name</label>
                  <input  v-model="trade.businessDetails.businessName" type="text" class="form-control" id=""  placeholder="Enter Business Name">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Certificate of Incorporation</label>
                  <input  v-model="trade.businessDetails.certificateOfIncorporation" type="text" class="form-control" id=""  placeholder="Enter Certificate of Incorporation">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">KRA Pin No.</label>
                  <input  v-model="trade.businessDetails.pinNumber" type="text" class="form-control" id=""  placeholder="Enter KRA Pin No.">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">VAT No.</label>
                  <input  v-model="trade.businessDetails.VATNumber" type="text" class="form-control" id=""  placeholder="Enter VAT No.">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">P.O.BOX</label>
                  <input v-model="trade.businessDetails.POBox" type="text" class="form-control" id=""  placeholder="Enter PO BOX  No.">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Postal Code</label>
                  <input v-model="trade.businessDetails.postalCode" type="text" class="form-control" id=""  placeholder="Enter Postal Code">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Postal Town</label>
                  <input v-model="trade.businessDetails.town" type="text" class="form-control" id=""  placeholder="Enter Postal Town">
                </div>
              </div>
            </div>

            <div class="row the-step biz-additional-info d-none">
              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Business mobile number</label>
                  <input v-model="trade.businessDetails.telephone1" type="text" class="form-control" id=""  placeholder="Enter Business mobile number">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Alternative Phone Number</label>
                  <input v-model="trade.businessDetails.telephone2" type="text" class="form-control" id=""  placeholder="Eg 07.......">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">FAX Number</label>
                  <input v-model="trade.businessDetails.faxNo" type="text" class="form-control" id=""  placeholder="Enter Fax Number">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Business Email</label>
                  <input v-model="trade.businessDetails.email" type="text" class="form-control" id=""  placeholder="email@email.com">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Business Physical Address</label>
                  <input v-model="trade.businessDetails.physicalAddress" type="text" class="form-control" id=""  placeholder="Physicall address">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Building Name</label>
                  <input v-model="trade.businessDetails.buildingName" type="text" class="form-control" id=""  placeholder="Enter Building Name">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Building Type</label>
                  <select v-model="trade.businessDetails.buildingType" class="form-control selectpicker bg-white" title="Select Applicant's subcounty" data-live-search="true" >
                    <option value=" ">Storey</option>
                    <option value=" ">Non-Storey</option>
                  </select>
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Floor Number</label>
                  <input  v-model="trade.businessDetails.floorNumber" type="text" class="form-control" id=""  placeholder="Enter Floor Number">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Room/Stall number</label>
                  <input v-model="trade.businessDetails.roomNo" type="text" class="form-control" id=""  placeholder="Enter Room Number">
                </div>
              </div>
            </div>

            <div class="row the-step biz-owner d-none">
              <div class="col-2">
                <div class="mb-3">
                  <label for="" class="form-label">Owner's Title</label>
                  <select v-model="trade.businessDetails.ownerTitle" class="form-control selectpicker bg-white" title="Select Title" data-live-search="true" >
                    <option value=" ">Mr</option>
                    <option value=" ">Ms</option>
                    <option value=" ">Miss</option>
                    <option value=" ">Dr</option>
                  </select>
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="" class="form-label">Owner's Full Name</label>
                  <input v-model="trade.businessDetails.ownerFullName" type="text" class="form-control" id=""  placeholder="Enter Certificate of Incorporation">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Document Type</label>
                  <select v-model="trade.businessDetails.documentType" class="form-control selectpicker bg-white" title="Select Document Type" data-live-search="true" >
                    <option value=" ">ID Card</option>
                    <option value=" ">Driver's License</option>

                  </select>
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Owners FAX number</label>
                  <input  v-model="trade.businessDetails.ownersFAXnumber" type="text" class="form-control" id=""  placeholder="Enter Owner's Fax Number">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Owner's mobile number</label>
                  <input v-model="trade.businessDetails.ownersMobileNumber" type="text" class="form-control" id=""  placeholder="ie 07....">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Alternative Mobile Number</label>
                  <input v-model="trade.businessDetails.alternativeMobileNumber" type="text" class="form-control" id=""  placeholder="ie 07....">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Owner's P.O. Box Number</label>
                  <input v-model="trade.businessDetails.ownerBoxNumber" type="text" class="form-control" id=""  placeholder="ie 07....">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Postal Code</label>
                  <input v-model="trade.businessDetails.postalCode" type="text" class="form-control" id=""  placeholder=" Postal Code">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Postal Town</label>
                  <input v-model="trade.businessDetails.town" type="text" class="form-control" id=""  placeholder=" Postal Town">
                </div>
              </div>
            </div>

            <div class="row the-step biz-activity d-none">

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Area (M<sup>2</sup>)</label>
                  <input  v-model="trade.businessDetails.areaSize" type="text" class="form-control" id=""  placeholder="Enter the description of what the business does">
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Sub County</label>

                  <select v-model="subCounty" class="form-control  bg-white" title="Select Sub County" data-live-search="true" >
                    <option v-for="(item, index) in subCounties" :value="item" :key="index">
                      {{ item.subCountyName }}
                    </option>
                  </select>

                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Ward</label>
                  <select v-model="ward" class="form-control bg-white" title="Select ward" data-live-search="true" >
                    <option v-for="(item, index) in wards" :value="item" :key="index">
                      {{ item.wardName }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Business Activity</label>
                  <select @change="getTradeSubCategory($event)" class="form-control bg-white" title="Select Business Activity" data-live-search="true" >
                    <option v-for="(item, index) in trade.tradeCategories" :value="item.brimsCode" :key="index">
                      {{ item.businessActivityName }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-4">
                <div class="mb-3">
                  <label for="" class="form-label">Sub categories</label>
                  <select @change="selectedTradeSubCategory($event)" class="form-control bg-white" title="Select Sub Categories" data-live-search="true" >
                    <option v-for="(item, index) in trade.tradeSubCategories" :value="JSON.stringify(item)" :key="index">
                      {{ item.businessActivityName }}
                    </option>
                  </select>
                </div>
              </div>


              <div class="col-4">
                <div class="mb-4">
                  <div class="bg-red-light computed-charges">
                    <img src="/assets/dollar.svg" />
                    <div class="">
                      <p>Amount Payable</p>
                      <h5>KES {{trade.businessDetails.sbpFee}}</h5>
                    </div>
                  </div>

                </div>
              </div>

              <div v-if="message!==null" class="alert alert-danger" role="alert">
                {{message}}
              </div>

            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex modal-next-prev-container">
              <button type="button" class="btn btn-outline-secondary btn-prev waves-effect waves-effect waves-light me-3">
                <i class="bx bx-left-arrow-alt font-size-16 align-middle me-2"></i> Previouse
              </button>

              <button type="button" class="btn btn-primary waves-effect waves-effect waves-light btn-next">
                Next <i class="bx bx-right-arrow-alt font-size-16 align-middle me-2"></i>
              </button>

              <button @click="addToBill(trade.businessDetails)"  data-dismiss="modal" type="button" class="btn btn-submit btn-success d-none ml-3 ms-3 waves-effect waves-effect waves-light btn-next">
                <i class="bx bx-check-double font-size-16 align-middle me-2"></i> Submit Application
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- new business application -->


    <!-- new liquor license -->
    <div class="modal fade" id="new-liquore-license" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-capitalize" id="exampleModalLongTitle">Liquore License Application</h5>
            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Business ID</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter Business ID">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Business Name</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter Business Name">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">KRA PIN Number</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="KRA Pin Number">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Plot Number</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter plot Number">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Phone Number</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter phone No.">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Email Address</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="email@email.com">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">PO Box</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter phone No.">
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Town</label>
                  <input type="text" class="form-control" id="formrow-email-input"  placeholder="email@email.com">
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Physical Address</label>
                  <textarea name="" id="" class="form-control" placeholder="Enter the physical Address" cols="30" rows=""></textarea>
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">Sub County</label>
                  <select class="form-control selectpicker bg-white" title="Select Traffic offence" data-live-search="true" >
                    <option value=" ">Failing to carry and produce a driving license on demand.</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 1-5 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 6-10 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 11-15 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 16-20 KPH</option>
                  </select>
                </div>
              </div>

              <div class="col-6">
                <div class="mb-3">
                  <label for="formrow-firstname-input" class="form-label">Ward</label>
                  <select class="form-control selectpicker bg-white" title="Select Traffic offence" data-live-search="true" >
                    <option value=" ">Failing to carry and produce a driving license on demand.</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 1-5 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 6-10 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 11-15 KPH</option>
                    <option value=" ">Exceeding speed limit prescribed for class of vehicle by 16-20 KPH</option>
                  </select>
                </div>
              </div>

              <div class="col-xl-12 col-sm-12">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4 text-capitalize">Check where necessary</h5>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="formRadios" id="formRadios1" checked="">
                    <label class="form-check-label" for="formRadios1">
                      This application has been approved
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="formRadios" id="formRadios2">
                    <label class="form-check-label" for="formRadios2">
                      This application is provisional
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary w-100">Submit Application</button>
          </div>
        </div>
      </div>
    </div>





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
                <h4 class="mb-sm-0 font-size-18 text-capitalize">Create New Bill</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">New Bill</li>
                  </ol>
                </div>

              </div>
            </div>
          </div>
          <!-- end page title -->

          <!-- eTransactions table -->

          <div class="row">
            <div class="col-lg-12">
              <div class="card bill-creater-module">
                <div class="card-body ">
                  <div class="row">
                    <div class="col-12">
                      <div class="p-4 bg-light mb-4">
                        <div class="row d-flex justify-content-between align-items-center">
                          <div class="col-12 d-flex justify-content-between  align-items-center">
                            <div class="d-fle">
                              <p class="mb-0 fw-semibold text-uppercase pb-0"><a href="#">Client Details</a></p>

                            </div>
                            <div class="">
                              <div class="mb-0 d-flex justify-content-between align-items-center ">
                                <button class="btn btn-success btn-sm"  data-toggle="modal" data-target="#subscribeModal">Select A diffrent Client</button>
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <hr>
                          </div>


                          <div class="col-12">
                            <div class="row">
                              <div class="col-4 col-sm-12 col-md-4 d-none">
                                <div class="d-flex">
                                  <div class="flex-shrink-0 me-3 align-self-center">
                                    <i class="mdi mdi-card-account-details-outline  h2 text-dark"></i>
                                  </div>
                                  <div class="flex-grow-1">
                                    <p class="text-muted mb-0">ID No.</p>
                                    <h5 class="mb-0 font-14px"><span>12345678</span></h5>
                                  </div>
                                </div>
                              </div>
                              <div class="col-4 col-sm-12 col-md-4">
                                <div class="d-flex">
                                  <div class="flex-shrink-0 me-3 align-self-center">
                                    <i class="mdi mdi-account  h2 text-dark"></i>
                                  </div>
                                  <div class="flex-grow-1">
                                    <p class="text-muted mb-0">Offender's Full Name</p>
                                    <h5 class="mb-0 font-14px"><span>Kelvin Njuguna Ndungu</span></h5>
                                  </div>
                                </div>
                              </div>

                              <div class="col-4 col-sm-12 col-md-4">
                                <div class="d-flex">
                                  <div class="flex-shrink-0 me-3 align-self-center">
                                    <i class="mdi mdi-phone  h2 text-dark"></i>
                                  </div>
                                  <div class="flex-grow-1">
                                    <p class="text-muted mb-0">Phone No.</p>
                                    <h5 class="mb-0 font-14px text-uppercase"><span>0704549859</span></h5>
                                  </div>
                                </div>
                              </div>

                              <div class="col-4 col-sm-12 col-md-4">
                                <div class="d-flex">
                                  <div class="flex-shrink-0 me-3 align-self-center">
                                    <i class="mdi mdi-email-outline  h2 text-dark"></i>
                                  </div>
                                  <div class="flex-grow-1">
                                    <p class="text-muted mb-0">Email Address</p>
                                    <h5 class="mb-0 font-14px"><span>Kelvinnjuguna99@gmail.com</span></h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-5">
                      <div class="d-flex justify-items-center align-items-center">
                        <div class="border-1 invoice-form p-4">
                          <h4 class="card-title mb-4">Enter the invoice details beow</h4>

                          <div v-if="message!==null" class="alert alert-danger" role="alert">
                            {{message}}
                          </div>

                          <form>
                            <div class="row tenant-invoice-container invoice-options">

                              <div class="col-12">
                                <div class="mb-3">
                                  <label for="formrow-firstname-input" class="form-label">Revenue Stream</label>
                                  <select @change="selectRevenue($event)"  class="form-control bg-white select-revenue" title="Select Revenue Stream" data-live-search="true" >
                                    <option value="Parking">Parking</option>
                                    <option value="Trade">Trade</option>
                                    <option value="Rent">Rent</option>
                                    <option value="Health">Health</option>
                                    <option value="Others">Planning</option>
                                    <option value="Landrates">Land Rates</option>
                                    <option value="Liquor">Liquor</option>
                                    <option value="Others">Advert</option>
                                    <option value="Others" selected>Others</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-12 rev-options-cont">
                                <div class="row others-rev">
                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Income Type</label>

                                   <!--   <select @change="selectedIncomeType($event)"  title="&#45;&#45; Income Type &#45;&#45;" class="form-control show-tick" data-live-search="true" v-model="billingModule.incomeType" tabindex="0">
                                        <option v-for="(item, index) in billingModule.incomeTypes" :value="JSON.stringify(item)" :key="index">
                                          {{ item.incomeTypeDescription }}
                                        </option>
                                      </select>
-->
                                        <select @change="selectedIncomeType($event)"  title="-- Income Type --" class="form-control show-tick" data-live-search="true" v-model="billingModule.incomeType">
                                          <option v-for="(item, index) in billingModule.incomeTypes" :value="JSON.stringify(item)" :key="index">
                                            {{ item.incomeTypeDescription }}
                                          </option>
                                        </select>

                                    </div>
                                  </div>
                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Account Name</label>
                                      <select @change="selectedFeeAndCharge($event)" class="form-control bg-white" title="Select Traffic offence" data-live-search="true" >
                                        <option v-for="(item, index) in feesAndCharges" :value="JSON.stringify(item)" :key="index">
                                          {{ item.feeDescription }}
                                        </option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Sub County</label>

                                      <select v-model="subCounty" class="form-control  bg-white" title="Select Sub County" data-live-search="true" >
                                        <option v-for="(item, index) in subCounties" :value="item" :key="index">
                                          {{ item.subCountyName }}
                                        </option>

                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Ward</label>
                                      <select v-model="ward" class="form-control bg-white" title="Select Ward" data-live-search="true" >
                                        <option v-for="(item, index) in wards" :value="item" :key="index">
                                          {{ item.wardName }}
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-12">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Details</label>
                                      <textarea v-model="description" name="" id="" cols="30" rows="3" placeholder="More details" class="form-control"></textarea>
                                    </div>
                                  </div>

                                  <div class="col-md-6 col-sm-12 col-lg-5 mb-4">
                                    <div class="mb-3">
                                      <label for="formrow-email-input" class="form-label">Amount</label>
                                      <input v-model="amount" type="text" class="form-control" id="formrow-email-input"  placeholder="Bill Item amount" readonly>
                                    </div>
                                  </div>

                                  <div>
                                    <button @click="addToBill(description)" type="button" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-plus label-icon"></i> Bill Item</button>
                                  </div>
                                </div>
                                <div class="row Rent-rev d-none">
                                  <div class="col-12">
                                    <div class="mb-3">
                                      <label for="formrow-email-input" class="form-label">Estate</label>

                                      <select title="-- Select The estate --" class="form-control show-tick" data-live-search="true" v-model="houseItem.estate">
                                        <option v-for="(item, index) in estates" :value="item" :key="index">
                                          {{ item.estateName }}
                                        </option>
                                      </select>

                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-email-input" class="form-label">House Type</label>
                                      <select @change="selectedHouseType($event)" title="-- Select Hse Type --" class="form-control show-tick" data-live-search="true">
                                        <option v-for="(item, index) in houseTypes" :value="JSON.stringify(item)" :key="index">
                                          {{ item.houseType }}
                                        </option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-email-input" class="form-label">House Number</label>
                                      <select class="form-control show-tick" data-live-search="true" v-model="houseItem.houseNo">

                                        <option v-for="(item, index) in houseNumbers" :value="item" :key="index">
                                          {{ item.houseNumber }}
                                        </option>

                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Sub County</label>
                                      <select class="form-control show-tick" data-live-search="true" v-model="subCounty">

                                        <option v-for="(item, index) in subCounties" :value="item" :key="index">
                                          {{ item.subCountyName }}
                                        </option>

                                      </select>

                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Ward.</label>
                                      <select class="form-control show-tick" data-live-search="true" v-model="ward">
                                        <option v-for="(item, index) in wards" :value="item" :key="index">
                                          {{ item.wardName }}
                                        </option>
                                      </select>
                                    </div>
                                  </div>

                                  <div>
                                      <button @click="addToBill(houseItem)" type="button" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-plus label-icon"></i> Bill Item</button>
                                  </div>

                                </div>

                                <div class="row parking-rev d-none">

                                  <div class="col-12">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Parking Category</label>
                                      <select @change="selectRevenue($event)"  class="form-control form-select bg-white" title="Select Car Type" data-live-search="true" v-model="parking.durationCode">
                                        <option value="DAILY">--Select Duration--</option>
                                        <option value="DAILY">Daily Parking</option>
                                        <option value="SEASONAL">Seasonal Parking</option>
                                        <option value="PENANLTY">Parking Penalty</option>
                                        <option value="OFFSTREET">Offstreet Parking</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Plate Number</label>
                                      <input v-model="parking.numberPlate" type="text" class="form-control" id="" placeholder="Enter Plate Number">
                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Car Category</label>

                                      <select title="-- Select Car Type --" class="form-control show-tick" data-live-search="true" v-model="parking.category">
                                        <option v-for="(item, index) in parking.categories" :value="item.category" :key="index">
                                          {{ item.category }}
                                        </option>
                                      </select>

                                    </div>
                                  </div>
                                  <div class="col-12">
                                    <!-- optional fields depending on selected parking type -->
                                    <div class="row">
                                      <div class="col-12 d-none offstreet-duration">
                                        <div class="mb-3">
                                          <label for="formrow-firstname-input" class="form-label">Duration Parked</label>
                                          <input type="text" class="form-control" id="" value="" placeholder="Enter duration in Minutes">
                                        </div>
                                      </div>
                                      <div class="col-12 d-none seasonal-duration">
                                        <div class="mb-3">
                                          <label for="formrow-firstname-input" class="form-label">Parking Duration {{parking.duration}}</label>

                                            <select title="-- Parking Duration --" class="form-control show-tick" data-live-search="true" v-model="parking.duration">
                                            <option v-for="(item, index) in parking.durations" :value="item.duration" :key="index">
                                              {{ item.duration }}
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>


                                  <div class="col-12">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Parking Zone</label>

                                      <select @change="selectZone($event)" title="-- Parking Zone --" class="form-control show-tick" data-live-search="true" v-model="parking.zoneCode">
                                        <option v-for="(item, index) in parking.zones" :value="item.zoneCode" :key="index">
                                          {{ item.zoneCode }}
                                        </option>
                                      </select>

                                    </div>
                                  </div>

                                  <div class="col-md-12 col-sm-12 col-lg-12 mb-4">
                                    <div class="mb-3">
                                      <label for="formrow-email-input" class="form-label">Charges</label>
                                      <input v-model="parking.charges" type="text" class="form-control" id="formrow-email-input" placeholder="Bill Item amount" readonly>
                                    </div>
                                  </div>

                                  <div>
                                    <button @click="addToBill(parking.numberPlate)" type="button" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-plus label-icon"></i> Bill Item</button>
                                  </div>
                                </div>

                                <div class="row health-rev d-none">
                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label ">Select Service</label>
                                      <select class="form-select health-selector" title="Select Option" data-live-search="true" >
                                        <option value="Food Hygien">Food Hygien</option>
                                        <option value="Food Handler">Food Handler</option>

                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-6 ">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Select Option</label>
                                      <select class="form-select hyginene-selector" title="Select Option" data-live-search="true" >
                                        <option value="New Application">New Application</option>
                                        <option value="Renewal">Renewal</option>
                                      </select>

                                      <select class="form-select handler-selector d-none" title="Select Option" data-live-search="true" >
                                        <option value="New Application">New Application</option>
                                        <option value="Renewal">Renewal</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-12 health-options">
                                    <div class="row food-hygiene-cont">
                                      <div class="col-12 new-hygiene">
                                        <button type="button" class="btn btn-outline-success waves-effect waves-light btn-soft waves-effect waves-light w-sm w-100 p-4 text-uppercase" data-toggle="modal" data-target="#new-food-hygene">
                                          <i class="mdi-food-fork-drink mdi d-block font-size-30 "></i> Start Food Hygiene Application
                                        </button>
                                      </div>
                                      <div class="col-12 d-none renew-hygene">
                                        <div class="mb-3">
                                          <label for="formrow-firstname-input" class="form-label">Business ID</label>
                                          <input type="text" class="form-control" id="" value="" placeholder="Enter Business ID to continue">
                                        </div>
                                        <div class="row">
                                          <div class="col-12">
                                            <div class="mb-3">
                                              <label for="formrow-firstname-input" class="form-label">Business Name</label>
                                              <input  type="text" class="form-control" id=""  disabled placeholder="Searched Business ...">
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-12">
                                            <button type="button" class="btn btn-info waves-effect btn-label waves-light w-100">
                                              <i class="dripicons-plus label-icon"></i> Add to Bill
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row food-handler-cont d-none">
                                      <div class="col-12 new-Handler">
                                        <button type="button" class="btn btn-outline-success waves-effect waves-light btn-soft waves-effect waves-light w-sm w-100 p-4 text-uppercase" data-toggle="modal" data-target="#new-food-handler">
                                          <i class="mdi-chef-hat mdi d-block font-size-30 "></i> Start Food Handler Application
                                        </button>
                                      </div>
                                      <div class="col-12 d-none renew-Handler">
                                        <div class="mb-3">
                                          <label for="formrow-firstname-input" class="form-label">Client's ID No.</label>
                                          <input type="text" class="form-control" id="" value="" placeholder="Enter Business ID to continue">
                                        </div>
                                        <div class="row">
                                          <div class="col-12">
                                            <div class="mb-3">
                                              <label for="formrow-firstname-input" class="form-label">Client's Name</label>
                                              <input type="text" class="form-control" id="" value="" disabled placeholder="Persons Name">
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-12">
                                            <button type="button" class="btn btn-info waves-effect btn-label waves-light w-100">
                                              <i class="dripicons-plus label-icon"></i> Add to Bill
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row trade-rev d-none">
                                  <div class="col-12">
                                    <select name="" id="" class="form-select mb-4">
                                      <option value="">Register New Business</option>
                                      <option value="">Renew License</option>
                                    </select>
                                  </div>
                                  <div class="col-12">
                                    <div class="row">
                                      <div class="col-12 new-hygiene">
                                        <button type="button" class="btn btn-outline-success waves-effect waves-light btn-soft waves-effect waves-light w-sm w-100 p-4 text-uppercase" data-toggle="modal" data-target="#new-business">
                                          <i class="mdi-briefcase-plus-outline mdi d-block font-size-30 "></i> Start New Business Registration
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row liquor-rev d-none">
                                  <div class="col-12">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label ">Select Service</label>
                                      <select class="form-select liquor-selector" title="Select Option" data-live-search="true" >
                                        <option value="New Application">Licence Application</option>
                                        <option value="License Renewal">Licence Renewal</option>

                                      </select>
                                    </div>
                                  </div>

                                  <div class="col-12 liqur-options">
                                    <div class="row">
                                      <div class="col-12 new-application">
                                        <button type="button" class="btn btn-outline-success waves-effect waves-light btn-soft waves-effect waves-light w-sm w-100 p-4 text-uppercase" data-toggle="modal" data-target="#new-liquore-license">
                                          <i class="mdi-glass-mug-variant mdi d-block font-size-30 "></i> Start Liquor License Application
                                        </button>
                                      </div>
                                      <div class="col-12 d-none renew-liquor">
                                        <div class="mb-3">
                                          <label for="formrow-firstname-input" class="form-label">Business ID</label>
                                          <input type="text" class="form-control" id="" value="" placeholder="Enter Business ID to continue">
                                        </div>
                                        <div class="row">
                                          <div class="col-12">
                                            <div class="mb-3">
                                              <label for="formrow-firstname-input" class="form-label">Business Name</label>
                                              <input type="text" class="form-control" id="" value="" disabled placeholder="Searched Business ...">
                                            </div>
                                          </div>
                                        </div>
                                        <div class="row">
                                          <div class="col-12">
                                            <button type="button" class="btn btn-info waves-effect btn-label waves-light w-100">
                                              <i class="dripicons-plus label-icon"></i> Add to Bill
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="row landrate-rev d-none">
                                  <div class="col-12">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Property Number</label>
                                      <input type="text" class="form-control" placeholder="Enter property Number">
                                    </div>
                                  </div>

                                  <div class="col-12">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Owner's Name</label>
                                      <input type="text" class="form-control" placeholder="The names" readonly>
                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Annual Landrate</label>
                                      <input type="text" class="form-control" placeholder="Search first" readonly>
                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Arreas</label>
                                      <input type="text" class="form-control" placeholder="Search first" readonly>
                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Penalties</label>
                                      <input type="text" class="form-control" placeholder="Search first" readonly>
                                    </div>
                                  </div>

                                  <div class="col-6">
                                    <div class="mb-3">
                                      <label for="formrow-firstname-input" class="form-label">Total Balance</label>
                                      <input type="text" class="form-control" placeholder="Search first" readonly>
                                    </div>
                                  </div>


                                  <div class="col-md-12">
                                    <div class="mb-3">
                                      <label for="formrow-email-input" class="form-label">Amount</label>
                                      <input type="text" class="form-control" id="formrow-email-input"  placeholder="Enter amount to be paid">
                                    </div>
                                  </div>

                                  <div>
                                    <button type="button" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-plus label-icon"></i> Bill Item</button>
                                  </div>
                                </div>
                              </div>

                            </div>

                          </form>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-7">
                      <div class="d-flex justify-items-center align-items-center ">
                        <div class="border-1 invoice-table p-4 w-100">
                          <h4 class="card-title mb-4">Created Bill Details</h4>
                          <div class="row">
                            <div class="col-12">
                              <div class="table-responsive border-1">
                                <table class="table table-nowrap  vertical-align-middle table-sm">
                                  <thead class="bg-light">
                                  <tr>
                                    <th style="width: 70px;">No.</th>
                                    <th>Details</th>
                                    <th class="text-end">Amount</th>
                                    <th class="" style="width: 150px;"></th>
                                  </tr>
                                  </thead>
                                  <tfoot class="bg-light">
                                  <tr>
                                    <td colspan="2" class="border-0 text-end text-right">
                                      <strong>Total</strong>
                                    </td>
                                    <td class="border-0 text-end">
                                      <h5 class="m-0 text-uppercase fw-bold">KES {{totalAmount}}</h5>
                                    </td>
                                    <td>

                                    </td>
                                  </tr>
                                  </tfoot>
                                  <tbody v-for="(item,index) in billItem" :key="`item-${index}`">
                                  <tr  title="Driving Without identification plates affixed or plates not fixed in the prescribed manner">
                                    <td>{{index+1}}</td>
                                    <td>
                                      <p class="the-bill-item mb-0 p-0 m-0">{{item.incomeTypeId}} {{item.feeDescription}}</p>
                                    </td>

                                    <td class="text-end">KES {{item.unitFeeAmount}}</td>
                                    <td class="text-right">
                                      <button title="Edit Item" type="button" data-toggle="modal" data-target="#editModal"  class="btn btn-link waves-effect"><i class="mdi mdi-pencil font-size-16 align-middle me-2"></i></button>
                                      <button  title="View Item" type="button" class="btn btn-link waves-effect"><i class="mdi mdi-eye-outline font-size-16 align-middle me-2"></i></button>
                                      <button @click="selectedIndex(item,index)" data-target="#remove-bill-item" title="Remove Item" type="button" class="btn btn-link waves-effect text-danger"><i class="mdi mdi-close font-size-16 align-middle me-2"></i></button>
                                    </td>
                                  </tr>

                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>

                          <button @click="generateBill()" type="button" data-toggle="modal" data-target="#payment-modal" class="btn btn-success waves-effect btn-label waves-light"><i class="bx bx-plus label-icon"></i> Create Bill</button>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <!-- end card body -->
              </div>
              <!-- end card -->
            </div>
            <!-- end col -->
          </div>

          <!-- end row -->
        </div>
        <!-- container-fluid -->
      </div>
      <!-- End Page-content -->



      <footer class="footer ">
        <div class="container-fluid ">
          <div class="row ">
            <div class="col-sm-6 ">
<!--              <script>
                document.write(new Date().getFullYear())
              </script> © RevenueSure-->
            </div>
            <div class="col-sm-6 ">
              <div class="text-sm-end d-sm-block ">
                A product of county
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
  <div class="rightbar-overlay"></div>
  </body>

</div>
</template>

<script>
import NavigationBar from "@/components/Navigation.vue";
import {execute,biller,rent,parking,trade} from "@/api";
import $ from 'jquery'

export default {
  name: "BillNew",
  components: {NavigationBar},
  data(){
    return{
      confirmCash: false,
      phoneNumber:'',
      transactionCompleted: false,
      transactionSummary: false,
      paymentPanel: true,
      paymentMethod: false,
      billDetails:{
        id:'',
        billNo:'',
        incomeTypeID:'',
        incomeTypeDescription:'',
        costCenterNo:'',
        accountNo:'',
        feeID:'',
        detailAmount:'',
        receiptAmount:'',
        billBalance:'',
        wardID:'',
        subCountyID:'',
        status:'',
        dateCreated:''
      },
      billInfo:[],
      briefDescription:'',
      subCounty:null,
      ward:null,
      houseItem:{
        estate:null,
        houseType:{
          id: null,
          houseTypeCode:null,
          houseType: null
        },
        houseNo:{
          id: null,
          houseNumberCode: null,
          houseNumber:null,
          houseTypeCode: null,
          houseType: null,
          estateCode: null,
          estateName: null
        },
      },
      revenueStreamItem:{},
      selectedBillItem:{},
      itemIndex:'',
      description:'',
      amount:'',
      wardID:'',
      subCountyID:'',
      houseNumberCode:'',
      houseTypeCode:'',
      estateCode:'',
      estates:[
        {
          id: "",
          estateCode: "",
          estateName: ""
        }
      ],
      houseTypes:[{
        id: "",
        houseTypeCode: "",
        houseType: ""
      }],
      houseNumbers:[{
        id: "",
        houseNumberCode: "",
        houseNumber: "",
        houseTypeCode: "",
        houseType: "",
        estateCode: "",
        estateName: ""
      }],
      subCounties:[{
        subCountyID: "",
        subCountyName: ""
      }],
      wards:[{
        wardID: "",
        wardName: ""
      }],
      billItem:[],
      feesAndChargeItems:[{
        feeId: null,
        feeDescription: null,
        unitOfMeasure: null,
        unitFeeAmount: null,
        accountNo: null,
        incomeTypeId: null,
        feeType: null,
        accountDesc:null ,
        costCenterNo:null,
        zone: null,
        typeDescription: null
      }],
      feesAndCharges:[{
        feeId: null,
        feeDescription: null,
        unitOfMeasure: null,
        unitFeeAmount: null,
        accountNo: null,
        incomeTypeId: null,
        feeType: null,
        accountDesc:null ,
        costCenterNo:null,
        zone: null,
        typeDescription: null
      }],
      totalAmount:0,
      paymentData: {
        accNo: null,
        payBillNo: null,
        amount: null,
        phoneNumber: null,
        success: false,
        paymentMode:null
      },
      timer: null,
      randomNumber: null,
      receiptDetails: {
        id: '',
        receiptNo: null,
        billNo: '',
        detailAmount: '',
        receiptAmount: '',
        billBalance: '',
        costCenterNo: '',
        accountNo: '',
        incomeTypeDescription: '',
        feeID: '',
        wardID: '',
        subCountyID:'',
        currency: '',
        source: '',
        transactionCode: '',
        paidBy: '',
        dateCreated: '',
        dateModified: '',
        createdBy: '',
        modifiedBy: '',
        isActive: '',
        status: ''
      },
      receiptInfos: [
        {
          id: '',
          receiptNo: '',
          billNo: '',
          billTotal: '',
          receiptAmount: '',
          billBalance: '',
          customer: '',
          clientPhoneNo: '',
          description: '',
          receiptDate: '',
          printCount: '',
          wardID: '',
          subCountyID: '',
          dateCreated: '',
          dateModified: '',
          createdBy: '',
          modifiedBy: '',
          printedBy: '',
          updated: '',
          isActive: '',
          status: ''
        }],
      //Billing Module
      billingModule:{
        incomeType:{
          incomeTypeId: null,
          incomeTypeDescription:null,
          incomeTypePrefix: null,
          fundDescription: null,
          status: null
        },
        incomeTypes:[{
            incomeTypeId: null,
            incomeTypeDescription:null,
            incomeTypePrefix: null,
            fundDescription: null,
            status: null}]
      },
      selectedStream:'Others',
      //Parking Module
      parking:{
        zones:[],
        categories:[],
        durations:[],
        category:null,
        zoneCode:null,
        numberPlate:null,
        durationCode:null,
        charges: null
      },
      message:null,

      //Trade
      trade:{
        tradeCategories:[ {
          id:null,
          brimsCode:null,
          businessActivityName:null,
          activityDescription:null,
          status:null
        }],
        tradeSubCategories:[{
          id:null,
          parentBrimsCode:null,
          brimsCode:null,
          businessActivityName:null,
          businessActivityDescription:null,
          sbpFee:null,
          registrationFee:null,
          penalty:null,
          feeId:null,
          feeIdApplication:null,
          dateModified:null,
          unifiedSbp:null,
          changeOfDetailAmount:null,
          feeIdChangeOfDetails:null

        }],
        businessDetails:{
          businessName: null,
          certificateOfIncorporation: null,
          pinNumber: null,
          VATNumber: null,
          POBox: null,
          postalCode: null,
          plotNo: null,
          town: null,
          telephone1: null,
          telephone2: null,
          countyID: null,
          subCountyID: null,
          wardID: null,
          address: null,
          createdBy: null,
          physicalAddress: null,
          businessActivity: null,
          businessActivityDescription: null,
          brimsCode: null,
          registrationFee: null,
          sbpFee: null,
          faxNo:null,
          email:null,
          buildingName:null,
          buildingType:null,
          floorNumber:null,
          roomNo:null,
          ownerTitle:null,
          ownerFullName:null,
          documentType:null,
          ownersFAXnumber:null,
          ownersMobileNumber:null,
          alternativeMobileNumber:null,
          ownerBoxNumber:null,
          areaSize:null,
          tradeSubCategory:null,
        }
      }

    }
  },
  watch:{
    subCounty: function () {
      this.getWards()
    }
  },
  mounted() {
    this.getIncomeTypes()
    this.getSubCounties()
  },
  methods:{
    //TRADE
    getTradeCategory(){
      this.message =null
      const data = new FormData();
      data.append( "function", "getTradeCategory");
      execute(data,trade)
          .then((res) =>{
            if (res.data.success) {
              this.trade.tradeCategories =res.data.data.tradeCategories
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    getTradeSubCategory(event){
      this.message =null
      this.trade.tradeSubCategories = []
      this.trade.businessDetails.sbpFee =null
      const data = new FormData();
      data.append("function", "getTradeSubCategory");
      data.append("brimsCode", event.target.value);
      execute(data,trade)
          .then((res) =>{
            if (res.data.success) {
              this.trade.tradeSubCategories =res.data.data.tradeSubCategories
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    selectedTradeSubCategory(event){
      const value = event.target.value
      const result = JSON.parse(value);
      this.trade.businessDetails.tradeSubCategory = result
      this.trade.businessDetails.sbpFee = result.sbpFee
      this.feesAndChargeItems =[]
      this.feesAndChargeItems.push({
        feeId: result.feeId,
        feeDescription: result.businessActivityDescription,
        unitOfMeasure: null,
        unitFeeAmount: result.sbpFee,
        accountNo: null,
        incomeTypeId: this.trade.businessDetails.businessName,
        feeType: null,
        accountDesc:null ,
        costCenterNo:null,
        zone: null,
        typeDescription: null})
    },

    //PARKING
    getZones(){
      const data = new FormData();
      data.append("function", "getZones");
      execute(data,parking)
          .then((res) =>{
            if (res.data.success) {
              this.parking =res.data.data
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    getRate(){
      this.parking.charges = null
      this.message = null
      const data = new FormData();
      data.append("function", "getFeesAndCharges");
      data.append("zoneCode", this.parking.zoneCode);
      data.append("categoryCode", this.parking.category);
      data.append("durationCode", this.parking.durationCode);
      execute(data,parking)
          .then((res) =>{
            if (res.data.success) {
              this.parking.charges  =res.data.data.total.amount
              this.feesAndChargeItems = res.data.data.feesAndCharges
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    selectZone(){
      this.getRate()
    },

    //BILLER
    selectedFeeAndCharge(event){
      const data = JSON.parse(event.target.value)
      this.amount = data.unitFeeAmount
      this.feesAndChargeItems = []
      this.feesAndChargeItems.push(data)
    },
    selectedHouseType(event){
      const houseType = JSON.parse(event.target.value)
      this.houseItem.houseType = houseType
      console.log('Error: ', this.houseItem.houseType.houseTypeCode);
      this.getFeesAndCharges()
      this.getHouseNumbers()
    },
    selectedIncomeType(event){
      const value = event.target.value
      const result = JSON.parse(value);
      this.getFeesAndChargesBilling(result.incomeTypeId)
    },
    getIncomeTypes(){
      const data = new FormData();
      data.append("function", "getIncomeTypes");
      execute(data,biller)
          .then((res) =>{
            if (res.data.success) {
              this.billingModule.incomeTypes =res.data.data.incomeTypes
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    getFeesAndChargesBilling(incomeTypeId){
      const data = new FormData();
      data.append("function", "getFeesAndCharges");
      data.append("incomeTypeId",incomeTypeId);
      execute(data,biller)
          .then((res) =>{
            if (res.data.success) {
              this.feesAndCharges = res.data.data.feesAndCharges
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },

    //RENTS
    getEstates(){
      const data = new FormData();
      data.append("function", "getEstates");
      execute(data,rent)
          .then((res) =>{
            if (res.data.success) {
              this.estates =res.data.data.estates
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    getHouseType(){
      const data = new FormData();
      data.append("function", "getHouseType");
      execute(data,rent)
          .then((res) =>{
            if (res.data.success) {
              this.houseTypes =res.data.data.houseTypes
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    getHouseNumbers(){
      this.houseNumbers =[]
      this.houseItem.houseNo = ''
      const data = new FormData();
      data.append("function", "getHouseNumbers");
      data.append("estateCode", this.houseItem.estate.estateCode);
      data.append("houseTypeCode", this.houseItem.houseType.houseTypeCode);
      execute(data,rent)
          .then((res) =>{
            if (res.data.success) {
              this.houseNumbers =res.data.data.houseNumbers
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    getFeesAndCharges(){
      const data = new FormData();
      data.append("function", "getFeesAndCharges");
      data.append("estateCode", this.houseItem.estate.estateCode);
      data.append("houseTypeCode", this.houseItem.houseType.houseTypeCode);
      execute(data,rent)
          .then((res) =>{
            if (res.data.success) {
              this.amount  =res.data.data.total.amount
              this.feesAndChargeItems = res.data.data.feesAndCharges
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    selectedIndex:function (item,itemIndex){
      this.selectedBillItem = item
      this.itemIndex = itemIndex
      this.removeFromBill()
    },
    removeFromBill: function (){
      this.totalAmount -= this.billItem[this.itemIndex].unitFeeAmount
      this.billItem.splice(this.itemIndex,1)
    },

    //Main
    selectRevenue(event){
      this.selectedStream = event.target.value
      //alert(this.value);
      if(this.selectedStream==="Rent"){
        $('.Rent-rev').removeClass("d-none").siblings().addClass('d-none')
        //RENT
        this.getEstates()
        this.getHouseType()
        this.getSubCounties()
      }
      if(this.selectedStream==="Parking"){
        $('.parking-rev').removeClass("d-none").siblings().addClass('d-none')
        this.getZones()
      }
      if(this.selectedStream==="Health"){
        $('.health-rev').removeClass("d-none").siblings().addClass('d-none')
      }
      if(this.selectedStream==="Trade"){
        $('.trade-rev').removeClass("d-none").siblings().addClass('d-none')
        this.getSubCounties()
        this.getTradeCategory()
      }
      if(this.selectedStream==="Liquor"){
        $('.liquor-rev').removeClass("d-none").siblings().addClass('d-none')
      }
      if(this.selectedStream==="Landrates"){
        $('.landrate-rev').removeClass("d-none").siblings().addClass('d-none')
      }
      if(this.selectedStream==="Others"){

        $('.others-rev').removeClass("d-none").siblings().addClass('d-none')
        //Billing Module
        this.getIncomeTypes()
        this.getSubCounties()

        // $('.rev-options-cont').children('.row').each(function(index) {
        //     $(this).addClass('d-none')
        // });
      }

      if(this.selectedStream === "SEASONAL"){
        $('.seasonal-duration').removeClass("d-none").siblings().addClass('d-none')
      }
      if(this.selectedStream ==="DAILY"){
        $('.seasonal-duration').addClass("d-none")
        $('.offstreet-duration').addClass("d-none")
      }
      if(this.selectedStream ==="OFFSTREET"){
        $('.offstreet-duration').removeClass("d-none").siblings().addClass('d-none')
      }
      if(this.selectedStream === "PENALTY"){
        $('.offstreet-duration').addClass("d-none")
      }

    },
    getSubCounties(){
      const data = new FormData();
      data.append("function", "getSubCounty");
      execute(data,biller)
          .then((res) =>{
            if (res.data.success) {
              this.subCounties =res.data.data
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    getWards(){
      this.wards =[]
      this.ward = ''
      const data = new FormData();
      data.append("function", "getWards");
      data.append("subCountyID", this.subCounty.subCountyID);
      execute(data,rent)
          .then((res) =>{
            if (res.data.success) {
              this.wards =res.data.data.wards
            }else{
              this.message =res.data.message
            }
          })
          .catch((e) => {
            this.message =e.message
          });
    },
    addToBill(revenueStreamItem){
      for (const { typeDescription,feeId, feeDescription, unitFeeAmount, accountNo, costCenterNo, incomeTypeId} of this.feesAndChargeItems) {
        this.totalAmount += parseFloat(unitFeeAmount);
        this.billItem.push({
          typeDescription,
          feeId,
          feeDescription,
          unitFeeAmount,
          accountNo,
          costCenterNo,
          incomeTypeId,
          ward: this.ward,
          subCounty:this.subCounty,
          briefDescription: this.briefDescription,
          revenueStreamItem: revenueStreamItem,
        });
      }

    },
    generateBill(){
      let stream = null;
      if(this.selectedStream==="Rent"){
        stream = rent
      }
      if(this.selectedStream==="Parking" || this.selectedStream==="DAILY"|| this.selectedStream==="SEASONAL"|| this.selectedStream==="OFFSTREET"|| this.selectedStream==="PENALTY"){
        stream = parking
      }
      if(this.selectedStream==="Health"){
        stream = ""
      }
      if(this.selectedStream==="Trade"){
        stream = trade
      }
      if(this.selectedStream==="Liquor"){
        stream = ""
      }
      if(this.selectedStream==="Landrates"){
        stream = ""
      }
      if(this.selectedStream==="Others"){
        stream = biller
      }

      this.paymentMethod = false;
      this.paymentPanel = true;
      this.transactionSummary = false ;
      this.transactionCompleted = false

      this.message ="Generating Bill...please wait... "
      const data = new FormData();
         data.append("function", "generateBill");
         data.append("billItem", JSON.stringify(this.billItem));
         execute(data,stream)
             .then((res) =>{
               this.message =res.data.message
               if (res.data.success) {
                 this.billDetails = res.data.data.billDetails
                 this.billInfo = res.data.data.billInfo
                 this.paymentData.amount = res.data.data.billDetails.billBalance
                 this.paymentData.accNo = res.data.data.billDetails.billNo
               }else{
                 this.message =res.data.message
               }
             })
             .catch((e) => {
               this.message =e.message
             });
    },
    printBill(){
      localStorage['params'] = JSON.stringify({
        billNo: this.billDetails.billNo
      })
      const routeData = this.$router.resolve({name: 'bill'});
      window.open(routeData.href, '_blank');
    },
    printReceipt() {
      if (this.receiptDetails.receiptNo == null) {
        alert("Try again later");
      } else {
        //  this.$refs.closeReceived.click();
        localStorage['params'] = JSON.stringify({
          receiptNo: this.receiptDetails.receiptNo
        })
        const routeData = this.$router.resolve({name: 'receipt'});
        window.open(routeData.href, '_blank');
      }
    },
    showPaymentMethod(){
      this.paymentMethod = true;
      this.paymentPanel = false;
      this.transactionSummary = false;
      this.transactionCompleted = false
    },
    showTransactionSummary(paymentMode){

      this.paymentData.paymentMode = paymentMode

      if(paymentMode === "MPESA") {
        if (this.phoneNumber == null) {
          alert("Enter phone number");
          return;
        }
      }

      this.paymentMethod = false;
      this.paymentPanel = false;
      this.transactionSummary = true;
      this.transactionCompleted = false
    },
    makePayment() {
      if(this.paymentData.paymentMode === "MPESA") {
        if (this.phoneNumber == null) {
          alert("Enter phone number");
          return;
        }
      }
      this.message = "Payment Request sent";
      this.paymentData.phoneNumber = this.phoneNumber

      const data = new FormData();
      data.append("function", "makePayment");
      data.append("paymentData", JSON.stringify(this.paymentData));

      let stream = null;
      if (this.paymentData.accNo.startsWith("SBP")) {
        stream = trade;
      }
      if (this.paymentData.accNo.startsWith("PKN")) {
        stream = parking;
      }

      if (this.paymentData.accNo.startsWith("RNT")) {
        stream = rent;
      }

      if (this.paymentData.accNo.startsWith("BLL")) {
        stream = biller;
      }

      execute(data, stream)
          .then((res) => {
            if (res.data.success) {
              this.paymentMethod = false;
              this.paymentPanel = false;
              //start checking payment
              this.timer = setInterval(() => {

                this.checkPayment();
              }, 3000);
            } else {
              this.rate = null;
              alert(res.data.message);
            }
          })
          .catch((e) => {
            alert(e.message);
          });
    },
    checkPayment() {
      this.randomNumber = Math.floor(Math.random() * 3) + 1
      if(this.randomNumber === 1){
        this.message = "Waiting for payment.";
      }
      if(this.randomNumber === 2){
        this.message = "Waiting for payment..";
      }
      if(this.randomNumber ===3){
        this.message = "Waiting for payment...";
      }
      const data = new FormData();
      data.append("function", "checkPayment");
      data.append("accountRef", this.paymentData.accNo);

      let stream = null;
      if (this.paymentData.accNo.startsWith("SBP")) {
        stream = trade;
      }
      if (this.paymentData.accNo.startsWith("PKN")) {
        stream = parking;
      }
      if (this.paymentData.accNo.startsWith("RNT")) {
        stream = rent;
      }
      if (this.paymentData.accNo.startsWith("BLL")) {
        stream = biller;
      }
      execute(data, stream)
          .then((res) => {
            if (res.data.success) {
              clearInterval(this.timer);
              this.receipt = true;
              this.paymentData.success = false;
              this.transaction = res.data.data.transaction;
              this.receiptDetails = res.data.data.receipt.receiptDetails
              //Close the modal
              this.transactionSummary = false
              this.transactionCompleted = true
            }
          })
          .catch((e) => {
            alert(e.message);
          });
    },
  }
}
</script>

