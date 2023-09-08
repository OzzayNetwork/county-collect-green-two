<template>
    <div class="row">
        <div class="col-12 active">
            <div class="card active">
                <div class="card-body pt-2 pb-3 active">
                    <nav class="navbar navbar-expand-md navbar-white bg-white py-2 active">
                        <button class="navbar-toggler btn btn-sm px-3 font-size-16 header-item waves-effect h-auto text-primary" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="mdi mdi-menu"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between active" id="navbarNavAltMarkup">
                            <div class="navbar-nav active">
                                <a :class="activeClass" @click="gotTo('reports-sub-counties-details')" href="javascript:void(0)">All Transactions</a>
                                <a :class="activeClass2" @click="gotTo('reports-sub-county-streams')" href="javascript:void(0)">Revenue Streams</a>
                                <a :class="activeClass3" @click="gotTo('reports-sub-county-zones')" href="javascript:void(0)">Collection Zones</a>
                                <a :class="activeClass4"  @click="gotTo('reports-sub-county-agents')" href="javascript:void(0)">Revenue Team</a>

                            </div>
                            <div class="navbar-nav text-capitalize">
                                <h4 class="mb-0 m-0">{{subCountyName}}</h4>
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
        name: "SubCountyReportsToolBar",
        data() {
            return {
                subCountyName:'',
                currentPage:'',
            };
        },
        computed: {
            activeClass() {
                return {
                    'nav-item': true,
                    'nav-link': true,
                    'active': this.currentPage === 'reports-sub-counties-details'
                }
            },
            activeClass2() {
                return {
                    'nav-item': true,
                    'nav-link': true,
                    'active': this.currentPage === 'reports-sub-county-streams'
                }
            },
            activeClass3() {
                return {
                    'nav-item': true,
                    'nav-link': true,
                    'active': this.currentPage === 'reports-sub-county-zones'
                }
            },
            activeClass4() {
                return {
                    'nav-item': true,
                    'nav-link': true,
                    'active': this.currentPage === 'reports-sub-county-agents'
                }
            },

        },
        mounted(){
            this.currentPage = sessionStorage.getItem("currentPage")
            this.subCountyName = sessionStorage.getItem("subCountyName")
        },
        methods:{
            gotTo(route){
                sessionStorage.setItem("currentPage",route)
                this.$router.push(route);
            }
        }
    }
</script>

<style scoped>

</style>