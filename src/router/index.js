import {createWebHashHistory, createRouter} from "vue-router";
import Login from "@/components/Login.vue";
import Dashboard from "@/components/Dashboard.vue";
import NewBill from "@/components/NewBill.vue";
import Bill from "../../public/PrintDocs/Bill/Bill.vue";
import PrintReceipt from "../../public/PrintDocs/Receipts/PrintReceipt.vue";
import BillsRaised from "@/components/BillsRaised";
import BillsReceipted from "@/components/BillsReceipted";
import UnPaidBills from "@/components/UnPaidBills";
import ReceiptedPayments from "@/components/ReceiptedPayments";
import ReceiptsNew from "@/components/ReceiptsNew";
import TradePermts from "@/components/TradePermts";
import TradePermit from "../../public/PrintDocs/Trade-Permit/TradePermit";
import Customers from "@/components/Customers";
import AddUser from "@/components/systemusers/AddUser";
import Users from "@/components/systemusers/Users";
import Transactions from "@/components/Transactions";
import Zones from "@/components/systemusers/Zones";
import FinanceAct from "@/components/finance-act/FinanceAct";
import Department from "@/components/systemsettings/Department";
import RevenueStream from "@/components/systemsettings/RevenueStream";
import SubCountyReport from "../../public/PrintDocs/Print-Reports/SubCountyReport";
import Rentals from "@/components/rent/Rentals";
import Stalls from "@/components/rent/Stalls";
import AgentsTransactions from "@/components/Transactions/AgentsTransactions";
import UserLogs from "@/components/systemusers/UserLogs";
import UserCollections from "@/components/systemusers/UserCollections";
import ReportsSubCounty from "@/components/reports/collectionbysubcounties/ReportsSubCounty";
import ReportsSubCountyDetails from "@/components/reports/collectionbysubcounties/AllTransactions";
import ReportsSubCountyStreams from "@/components/reports/collectionbysubcounties/ReportsSubCountyStreams";
import ReportsSubCountyStreamsBreakdown from "@/components/reports/collectionbysubcounties/ReportsSubCountyStreamsBreakdown";
import ReportsSubCountyStreamsDetails from "@/components/reports/collectionbysubcounties/ReportsSubCountyStreamsDetails";
import LiveMonitoring from "@/components/LiveMonitoring";
import ReportsSubCountyZones from "@/components/reports/collectionbysubcounties/ReportsSubCountyZones";
import ReportsSubCountyZonesDetails from "@/components/reports/collectionbysubcounties/ReportsSubCountyZonesDetails";
import ReportsSubCountyAgents from "@/components/reports/collectionbysubcounties/ReportsSubCountyAgents";
import ReportsSubCountyAgentDetails from "@/components/reports/collectionbysubcounties/ReportsSubCountyAgentDetails";
import Mapping from "@/components/Mapping";
import CertBizStats from "@/components/sbp/CertBizStats";
import CertBizOngoing from "@/components/sbp/CertBizOngoing";

const routes =[
    {
        path:"/",
        name:"login",
        component: Login,
        meta:{public: true}
    },
    {
        path:"/dashboard",
        name:"dashboard",
        component: Dashboard,
        meta:{public: false}
    },
    {
        path:"/new-bill",
        name:"newBill",
        component: NewBill,
        meta:{public: false}
    },

    {
        path: '/bill',
        name: 'bill',
        component: Bill,
        meta:{public: true}
    },
    {
        path: "/receipt",
        name: "receipt",
        component: PrintReceipt,
        meta: {public: true}
    },
    {
        path: "/bills-raised",
        name: "bills-raised",
        component: BillsRaised,
        meta: {public: true}
    },
    {
        path: "/un-paid-bills",
        name: "un-paid-bills",
        component: UnPaidBills,
        meta: {public: true}
    },
    {
        path: "/bills-receipted",
        name: "bills-receipted",
        component: BillsReceipted,
        meta: {public: true}
    },
    {
        path: "/receipts",
        name: "receipts",
        component: ReceiptedPayments,
        meta: {public: true}
    },
    {
        path: "/receipts-new",
        name: "receipts-new",
        component: ReceiptsNew,
        meta: {public: true}
    },
    {
        path: "/permits",
        name: "permits",
        component: TradePermts,
        meta: {public: true}
    },{
        path: "/trade",
        name: "trade",
        component: TradePermit,
        meta: {public: true}
    },
    {
        path: "/customers",
        name: "customers",
        component: Customers,
        meta: {public: true}
    },
    {
        path: "/add-users",
        name: "add-users",
        component: AddUser,
        meta: {public: true}
    },
    {
        path: "/users",
        name: "users",
        component: Users,
        meta: {public: true}
    },{
        path: "/transactions",
        name: "transactions",
        component: Transactions,
        meta: {public: true}
    },{
        path: "/zones",
        name: "zones",
        component: Zones,
        meta: {public: true}
    },
    {
        path: "/finance-act",
        name: "finance-act",
        component: FinanceAct,
        meta: {public: true}
    },
    {
        path: "/department",
        name: "department",
        component: Department,
        meta: {public: true}
    }, {
        path: "/revenue-stream",
        name: "revenue-stream",
        component: RevenueStream,
        meta: {public: true}
    },{
        path: "/sub-county-report",
        name: "sub-county-report",
        component: SubCountyReport,
        meta: {public: true}
    },
    {
        path: "/rentals",
        name: "rentals",
        component: Rentals,
        meta: {public: true}
    },
    {
        path: "/stalls",
        name: "stalls",
        component: Stalls,
        meta: {public: true}
    },{
            path: "/agent-transactions",
        name: "agent-transactions",
        component: AgentsTransactions,
        meta: {public: true}
    },
    {
        path: "/user-logs",
        name: "user-logs",
        component: UserLogs,
        meta: {public: true}
    },
    {
        path: "/user-collections",
        name: "user-collections",
        component: UserCollections,
        meta: {public: true}
    },{
        path: "/reports-sub-county",
        name: "reports-sub-county",
        component: ReportsSubCounty,
        meta: {public: true}
    },
    {
        path: "/reports-sub-counties-details",
        name: "reports-sub-counties-details",
        component: ReportsSubCountyDetails,
        meta: {public: true}
    },{
        path: "/reports-sub-county-streams",
        name: "reports-sub-county-streams",
        component: ReportsSubCountyStreams,
        meta: {public: true}
    },
    {
        path: "/reports-sub-county-streams-break-down",
        name: "reports-sub-county-streams-break-down",
        component: ReportsSubCountyStreamsBreakdown,
        meta: {public: true}
    },
    {
        path: "/reports-sub-county-streams-details",
        name: "reports-sub-county-streams-details",
        component: ReportsSubCountyStreamsDetails,
        meta: {public: true}
    },{
        path: "/live_monitoring",
        name: "live_monitoring",
        component: LiveMonitoring,
        meta: {public: true}
    },
    {
        path: "/reports-sub-county-zones",
        name: "reports-sub-county-zones",
        component: ReportsSubCountyZones,
        meta: {public: true}
    },{
        path: "/reports-sub-county-zones-details",
        name: "reports-sub-county-zones-details",
        component: ReportsSubCountyZonesDetails,
        meta: {public: true}
    },
    {
        path: "/reports-sub-county-agents",
        name: "reports-sub-county-agents",
        component: ReportsSubCountyAgents,
        meta: {public: true}
    },
    {
        path: "/reports-sub-county-agent-details",
        name: "reports-sub-county-agent-details",
        component: ReportsSubCountyAgentDetails,
        meta: {public: true}
    },
    {
        path: "/mapping",
        name: "mapping",
        component: Mapping,
        meta: {public: true}
    },
    {
        path: "/cert-biz-stats",
        name: "cert-biz-stats",
        component: CertBizStats,
        meta: {public: true}
    },
    {
        path: "/cert-biz-ongoing",
        name: "cert-biz-ongoing",
        component: CertBizOngoing,
        meta: {public: true}
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
