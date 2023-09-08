<template>
    <div class="row">
        <div class="col-12 active">
            <div class="card active">
                <div class="card-body mini-nav bg-primary pt-2 pb-3 active ">
                    <nav class="navbar navbar-expand-md navbar navbar-dark bg-primary py-2 active">
                        <button
                                class="navbar-toggler btn btn-sm px-3 font-size-16 header-item waves-effect h-auto text-primary"
                                type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span class="mdi mdi-menu"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between active"
                             id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-item nav-link" href="cert-biz-stats.html">Dashboard</a>
                                <a class="nav-item nav-link" href="cert-biz-ongoing.html">Ongoing
                                    Applications</a>

                                <a class="nav-item nav-link" href="cert-biz-inspection.html">Pending Inspection</a>
                                <a class="nav-item nav-link" href="cert-biz-suspended.html">Suspended
                                    Applications</a>
                                <a class="nav-item nav-link" href="cert-biz-approved.html">Approved
                                    Applications</a>
                                <a class="nav-item nav-link" href="cert-biz-active.html">Active
                                    Certs</a>
                                <a class="nav-item nav-link" href="cert-biz-expired.html">Expired
                                    Certs</a>
                                <a class="nav-item nav-link" href="cert-biz-penalized.html">Penalized
                                    Certs</a>
                                <a class="nav-item nav-link" href="cert-biz-unpaid-bills.html">Unpaid
                                    Bills</a>
                                <a class="nav-item nav-link"
                                   href="cert-biz-receipted-bills.html">SBP Receipts</a>
                            </div>


                        </div>
                    </nav>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ToolBar"
    }
</script>

<style scoped>

</style>