<template>

  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a class="logo logo-dark" >
                            <span class="logo-sm">
                                    <img alt="" height="22" :src="'./assets/images/logo.svg'">
                                </span>

            <span class="logo-lg">
<!--                                    <img alt="" height="17" src="/assets/images/logo-dark.png">-->
                                </span>
          </a>

          <a class="logo logo-light d-flex">
            <span class="logo-sm">
                <img alt="" height="50" :src="'./logos/county_logo.png'">
            </span>
            <span class="logo-lg">
                <img alt="" height="45" :src="'./logos/county_logo.png'">
            </span>

            <div class="portal-title">
              <h4 class="text-white">County Biller</h4>
              <h6 class="text-muted mb-0 text-white opacity-75">Homabay County</h6>
            </div>


          </a>
        </div>

        <button id="vertical-menu-btn" class="btn btn-sm px-3 font-size-16 header-item waves-effect" type="button">
          <i class="fa fa-fw fa-bars"></i>
        </button>
        <!-- logo small -->
        <div class="phone-logo d-md-none d-sm-flex"><img alt="" class="img" :src="'./logos/county_logo.png'"></div>


        <!-- App Search-->
        <form class="app-search d-none d-lg-block">
          <div class="position-relative">
            <input class="form-control" placeholder="Search..." type="text">
            <span class="bx bx-search-alt"></span>
          </div>
        </form>


      </div>

      <div class="d-flex">
        <!-- small search -->
        <div class="dropdown d-inline-block d-lg-none ms-2">
          <button id="page-header-search-dropdown" aria-expanded="false" aria-haspopup="true"
                  class="btn header-item noti-icon waves-effect" data-bs-toggle="dropdown" type="button">
            <i class="mdi mdi-magnify"></i>
          </button>
          <div aria-labelledby="page-header-search-dropdown"
               class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">

            <form class="p-3">
              <div class="form-group m-0">
                <div class="input-group">
                  <input aria-label="Recipient's username" class="form-control" placeholder="Search ..." type="text">
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="dropdown d-none d-lg-inline-block ms-1">
          <button class="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen" type="button">
            <i class="bx bx-fullscreen"></i>
          </button>
        </div>

        <div class="dropdown d-inline-block d-none">

          <!-- notifications, i will come to this later -->
          <button id="page-header-notifications-dropdown" aria-expanded="false" aria-haspopup="true"
                  class="btn header-item noti-icon waves-effect" data-bs-toggle="dropdown" type="button">
            <i class="bx bx-bell bx-tada"></i>
            <span class="badge bg-danger rounded-pill">3</span>
          </button>
          <div aria-labelledby="page-header-notifications-dropdown"
               class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
            <div class="p-3">
              <div class="row align-items-center">
                <div class="col">
                  <h6 key="t-notifications" class="m-0"> Notifications </h6>
                </div>
                <div class="col-auto">
                  <a key="t-view-all" class="small" href="#!"> View All</a>
                </div>
              </div>
            </div>
            <div data-simplebar style="max-height: 230px;">
              <a class="text-reset notification-item" href="javascript: void(0);">
                <div class="d-flex">
                  <div class="avatar-xs me-3">
                                            <span class="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i class="bx bx-cart"></i>
                                                </span>
                  </div>
                  <div class="flex-grow-1">
                    <h6 key="t-your-order" class="mb-1">Your order is placed</h6>
                    <div class="font-size-12 text-muted">
                      <p key="t-grammer" class="mb-1">If several languages coalesce the grammar</p>
                      <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                    </div>
                  </div>
                </div>
              </a>
              <a class="text-reset notification-item" href="javascript: void(0);">
                <div class="d-flex">
                  <img alt="user-pic" class="me-3 rounded-circle avatar-xs" :src="'./assets/images/users/avatar-3.jpg'">
                  <div class="flex-grow-1">
                    <h6 class="mb-1">James Lemire</h6>
                    <div class="font-size-12 text-muted">
                      <p key="t-simplified" class="mb-1">It will seem like simplified English.</p>
                      <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a class="text-reset notification-item" href="javascript: void(0);">
                <div class="d-flex">
                  <div class="avatar-xs me-3">
                                            <span class="avatar-title bg-success rounded-circle font-size-16">
                                                    <i class="bx bx-badge-check"></i>
                                                </span>
                  </div>
                  <div class="flex-grow-1">
                    <h6 key="t-shipped" class="mb-1">Your item is shipped</h6>
                    <div class="font-size-12 text-muted">
                      <p key="t-grammer" class="mb-1">If several languages coalesce the grammar</p>
                      <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                    </div>
                  </div>
                </div>
              </a>

              <a class="text-reset notification-item" href="javascript: void(0);">
                <div class="d-flex">
                  <img alt="user-pic" class="me-3 rounded-circle avatar-xs" :src="'./assets/images/users/avatar-4.jpg'">
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Salena Layfield</h6>
                    <div class="font-size-12 text-muted">
                      <p key="t-occidental" class="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                      <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="p-2 border-top d-grid">
              <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                <i class="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span>
              </a>
            </div>
          </div>
        </div>


        <div class="dropdown d-inline-block">
          <button id="page-header-user-dropdown" aria-expanded="false" aria-haspopup="true"
                  class="btn header-item waves-effect" data-bs-toggle="dropdown" type="button">
            <img alt="Header Avatar" class="rounded-circle header-profile-user"
                 :src="'./logos/county_logo.png'">
            <span @click="gotTo('/')" key="t-henry" class="d-none d-xl-inline-block ms-1">Logout</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-end">
            <!-- item-->
        <!--      <a class="dropdown-item" href="myprofile.html"><i class="bx bx-user font-size-16 align-middle me-1"></i>
                <span key="t-profile">My Profile</span></a>
              <a class="dropdown-item" href="my-logs.html"><i class="bx bx-time font-size-16 align-middle me-1"></i>
                <span key="t-profile">My Logs</span></a>
              <a class="dropdown-item" href="auth-lock-screen.html"><i
                      class="bx bx-lock-open font-size-16 align-middle me-1"></i> <span
                      key="t-lock-screen">Lock screen</span></a>-->
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-danger" @click="gotTo('/')"><i
                    class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span
                    key="t-logout">Logout</span></a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="vertical-menu">

    <div class="h-100" data-simplebar>

      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul id="side-menu" class="metismenu list-unstyled text-capitalize">
          <li key="t-pages" class="menu-title d-none">Best Birdy Billing system.</li>

          <li v-if="newBill" class="side-bar-button">
            <a @click="gotToSelected('new-bill')" class="waves-effect btn btn-light btn-rounded text-left write-msg-btn">
              <i class=""><img alt="" src="assets/images/plus-icon.svg"></i>
              <span class="text-capitalize">Create A Bill</span>
            </a>
          </li>

          <li v-if="dashboard" :class="{ 'mm-active': selected === 'dashboard' }">
            <a @click="gotToSelected('dashboard')" class="waves-effect">
              <i class="bx bx-home-circle"></i><span>Dashboard</span>
            </a>
          </li>

         <!-- <li v-if="liveMonitoring">
            <a href="javascript: void(0);" @click="gotToSelected('live_monitoring')" class="waves-effect">
              <i class="bx bx-user-voice"></i><span>Live Monitoring</span>
            </a>
          </li>-->

          <li v-if="paymentsReceipting" :class="{ 'mm-active': selected === 'Payments & Receipting' }">
            <a @click="selectedMenu('Payments & Receipting')" class="waves-effect has-arrow" href="javascript: void(0);">
              <i class="mdi mdi-receipt"></i>
              <span>Payments & Receipting </span>
            </a>
            <ul aria-expanded="false" class="sub-menu" :class="{ 'mm-active': selected === 'Payments & Receipting' }">
              <li :class="{ 'mm-active': selectedSub === 'receipts-new' }"><a style="cursor: pointer;" @click="gotTo('receipts-new')">Receive Payment</a></li>
              <li :class="{ 'mm-active': selectedSub === 'receipts' }"><a style="cursor: pointer;" @click="gotTo('receipts')">View Receipts</a></li>
            </ul>
          </li>

          <!-- <li>
          <a class="waves-effect" href="flagged-payments.html">
          <i class="dripicons-flag"></i><span>Flagged Payments</span>
          </a>
          </li>-->
          <li v-if="financeAct" :class="{ 'mm-active': selected === 'finance-act' }">
            <a class="waves-effect" @click="gotToSelected('finance-act')">
              <i class="mdi mdi-currency-usd"></i><span>Finance act</span>
            </a>
          </li>

          <li v-if="tenantAreas" :class="{ 'mm-active': selected === 'Tenant Areas' }">
            <a @click="selectedMenu('Tenant Areas')" href="javascript: void(0);" class="waves-effect has-arrow">
              <i class="mdi mdi-home-alert"></i>
              <span>Tenant Areas</span>
            </a>
            <ul :class="{ 'mm-active': selected === 'Tenant Areas' }" class="sub-menu" aria-expanded="false">
              <li :class="{ 'mm-active': selectedSub === 'rentals' }"><a href="javascript: void(0);" @click="gotTo('rentals')">Rentals</a></li>
              <li :class="{ 'mm-active': selectedSub === 'Market Stalls' }"><a href="javascript: void(0);" @click="gotTo('stalls')">Market Stalls</a></li>
            </ul>
          </li>

          <li v-if="bills" :class="{ 'mm-active': selected === 'bills' }">
            <a @click="selectedMenu('bills')" class="waves-effect has-arrow" href="javascript: void(0);">
              <i class="bx bx-receipt"></i>
              <span>Bills</span>
            </a>
            <ul :class="{ 'mm-active': selected === 'bills' }" class="sub-menu">
              <li :class="{ 'mm-active': selectedSub === 'bills-raised' }"><a href="javascript: void(0);" @click="gotTo('bills-raised')">Bills raised</a></li>
              <li :class="{ 'mm-active': selectedSub === 'bills-receipted' }"><a href="javascript: void(0);" @click="gotTo('bills-receipted')">Receipted Bills</a></li>
              <li :class="{ 'mm-active': selectedSub === 'un-paid-bills' }"><a href="javascript: void(0);" @click="gotTo('un-paid-bills')">Unpaid Bills</a></li>

            </ul>
          </li>

          <li v-if="trade" :class="{ 'mm-active': selected === 'trade' }">
            <a @click="selectedMenu('trade')" style="cursor: pointer;" class="waves-effect has-arrow" href="javascript: void(0);">
              <i class="mdi-certificate mdi"></i>
              <span>Certificates & Licenses</span>
            </a>
            <ul :class="{ 'mm-active': selected === 'trade' }" aria-expanded="false" class="sub-menu">
              <li :class="{ 'mm-active': selectedSub === 'permits' }"><a href="javascript: void(0);" @click="gotTo('permits')">Business Permits</a></li>
<!--              <li :class="{ 'mm-active': selectedSub === 'customers' }"><a href="javascript: void(0);">Food handlers certificate</a></li>-->
<!--              <li :class="{ 'mm-active': selectedSub === 'customers' }"><a href="javascript: void(0);">Food Hygiene Certificate</a></li>-->

            </ul>
          </li>

          <li v-if="reports" :class="{ 'mm-active': selected === 'reports' }">
            <a @click="selectedMenu('reports')" class="waves-effect has-arrow" href="javascript: void(0);">
              <i class="bx bx-file"></i>
              <span>Reports</span>
            </a>
            <ul :class="{ 'mm-active': selected === 'reports' }" style="cursor: pointer;" aria-expanded="false" class="sub-menu text-capitalize">
              <!-- <li><a href="reports-conty.html">Revenus By County</a></li>
              <li class=""><a href="reports-debtors.html">Debtors</a></li>
              <li class=""><a href="reports-sources.html">Revenue sources</a></li>-->
              <li  :class="{ 'mm-active': selectedSub === 'reports-sub-county' }" style="cursor: pointer;" class="text-capitalize"><a @click="gotTo('reports-sub-county')">Collections By Sub Counties</a></li>
              <li v-if="transactions" :class="{ 'mm-active': selectedSub === 'customers' }" style="cursor: pointer;" class="text-capitalize"><a @click="gotTo('customers')">Transactions</a></li>
              <li v-if="transactions" :class="{ 'mm-active': selectedSub === 'transactions' }" style="cursor: pointer;" class="text-capitalize"><a @click="gotTo('transactions')">All Transactions</a></li>
            </ul>
          </li>

          <li v-if="settings" :class="{ 'mm-active': selected === 'settings' }">
            <a @click="selectedMenu('settings')" class="waves-effect has-arrow" href="javascript: void(0);">
              <i class="bx bx-slider"></i>
              <span>Settings & Setups</span>
            </a>
            <ul :class="{ 'mm-active': selected === 'settings' }" aria-expanded="false" class="sub-menu">
              <li :class="{ 'mm-active': selectedSub === 'department' }"><a style="cursor: pointer;"  @click="gotTo('department')">Department</a></li>
              <li :class="{ 'mm-active': selectedSub === 'revenue-stream' }"><a style="cursor: pointer;" @click="gotTo('revenue-stream')">Revenue Stream</a></li>
            </ul>
          </li>

          <li v-if="zones" :class="{ 'mm-active': selected === 'zones' }" style="cursor: pointer;">
            <a @click="gotToSelected('zones')" class="waves-effect">
              <i class="mdi mdi-map"></i><span>Collection Zones</span>
            </a>
          </li>

          <li v-if="users" :class="{ 'mm-active': selected === 'users' }">
            <a @click="selectedMenu('users')" class="waves-effect has-arrow" href="javascript: void(0);">
              <i class="mdi mdi-monitor-multiple"></i>
              <span>System Users</span>
            </a>
            <ul :class="{ 'mm-active': selected === 'users' }"  aria-expanded="false" class="sub-menu">
              <li :class="{ 'mm-active': selectedSub === 'users' }" ><a style="cursor: pointer;" @click="gotTo('users')">System Users</a></li>
              <li v-if="permission==='WRITE'" :class="{ 'mm-active': selectedSub === 'add-users' }"><a style="cursor: pointer;" @click="gotTo('add-users')">Add a system user</a></li>
            </ul>
          </li>

        </ul>
      </div>
      <!-- Sidebar -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import { MetisMenu } from 'metismenujs';
  export default {
    name: 'NavigationBar',

    data() {
      return {
        permission:"",
        category:"",
        newBill: true,
        dashboard: true,
        paymentsReceipting:true,
        financeAct:true,
        tenantAreas: true,
        bills:true,
        trade: true,
        reports: true,
        settings: true,
        zones: true,
        users: true,
        liveMonitoring:true,
        transactions: true,

        selectedSub: null,
        selected: null,
        helmet: {
          names:''
        },
      };
    },
    components: {

    },

    methods:{
      selectedMenu(selected){
        sessionStorage.setItem("selected",selected)
      },
      gotToSelected(selected){
        sessionStorage.setItem("selected",selected)
        this.$router.push(selected);
      },
      gotTo(route){
        this.$router.push(route);
        sessionStorage.setItem("selectedSub",route)
      }
    },
    mounted() {

      this.names = sessionStorage.getItem("names")
      new MetisMenu('#side-menu');
      this.selected = sessionStorage.getItem("selected")
      this.selectedSub = sessionStorage.getItem("selectedSub")
      this.category = sessionStorage.getItem("category")
      this.permission = sessionStorage.getItem("permission")

     if(this.category === "EXECUTIVE"){
        this.newBill= false
        this.dashboard = true
        this.paymentsReceipting= false
        this.financeAct=false
        this.tenantAreas= false
        this.bills=false
        this.trade=false
        this.reports= true
        this.settings=false
        this.zones= false
        this.users= false
        this.liveMonitoring=false
        this.transactions = false

      }
      else {
        this.newBill= true
        this.dashboard = true
        this.paymentsReceipting= true
        this.financeAct=true
        this.tenantAreas= true
        this.bills=true
        this.trade=true
        this.reports= true
        this.settings=true
        this.zones= true
        this.users= true
        this.liveMonitoring=true
        this.transactions = true
      }

    }
  };


</script>
