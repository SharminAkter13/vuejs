<template>
    <div class="content-body">
        <div class="container-fluid">

            <div class="row">
                <div class="col-lg-3 col-sm-6" v-for="(card, i) in statCards" :key="i">
                    <div class="card">
                        <div class="stat-widget-two card-body">
                            <div class="stat-content">
                                <div class="stat-text">{{ card.title }}</div>
                                <div class="stat-digit"><i class="fa fa-usd"></i>{{ card.value }}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar"
                                    :class="card.color"
                                    :style="{ width: card.width }">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Sales Overview</h4>
                        </div>
                        <div class="card-body">

                            <div style="height:250px; background:#fff; border:1px solid #ddd; padding:20px;">
                                <svg width="100%" height="200">
                                    <line x1="0" y1="180" x2="100%" y2="180" stroke="#999" stroke-width="2"/>

                                    <rect x="20" y="100" width="40" height="80" fill="#4e73df"/>
                                    <rect x="90" y="60" width="40" height="120" fill="#1cc88a"/>
                                    <rect x="160" y="130" width="40" height="50" fill="#36b9cc"/>
                                    <rect x="230" y="20" width="40" height="160" fill="#f6c23e"/>
                                    <rect x="300" y="90" width="40" height="90" fill="#e74a3b"/>

                                    <text x="35" y="195" font-size="12">Jan</text>
                                    <text x="105" y="195" font-size="12">Feb</text>
                                    <text x="175" y="195" font-size="12">Mar</text>
                                    <text x="245" y="195" font-size="12">Apr</text>
                                    <text x="315" y="195" font-size="12">May</text>
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <h4 class="card-title">Customer Feedback</h4>
                            <h2 class="mt-3">385,749</h2>

                            <div style="width:140px; height:140px; margin: 20px auto; position:relative;">
                                <svg width="140" height="140">
                                    <circle cx="70" cy="70" r="60" stroke="#eee" stroke-width="20" fill="none"/>

                                    <circle cx="70" cy="70" r="60" 
                                            stroke="#1cc88a" 
                                            stroke-width="20" 
                                            fill="none"
                                            stroke-dasharray="345"
                                            stroke-dashoffset="27"
                                            transform="rotate(-90 70 70)"/>

                                    <circle cx="70" cy="70" r="60" 
                                            stroke="#e74a3b" 
                                            stroke-width="20" 
                                            fill="none"
                                            stroke-dasharray="30"
                                            stroke-dashoffset="-318"
                                            transform="rotate(-90 70 70)"/>
                                </svg>

                                <div style="position:absolute; top:52px; left:0; width:140px; text-align:center;">
                                    <strong style="font-size:20px;">92%</strong>
                                    <div style="font-size:12px; color:#777;">Positive</div>
                                </div>
                            </div>

                            <ul class="widget-line-list">
                                <li class="border-right">92% <br><span class="text-success">Positive</span></li>
                                <li>8% <br><span class="text-danger">Negative</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header"><h4 class="card-title">Project</h4></div>
                        <div class="card-body">
                            <div v-for="(p, i) in projects" :key="i" class="py-2">
                                <div class="row">
                                    <div class="col-lg-4">{{ p.name }}</div>
                                    <div class="col-lg-8">
                                        <div class="progress">
                                            <div class="progress-bar progress-bar-primary"
                                                    :style="{ width: p.width }">
                                                {{ p.percent }}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <p style="font-size:14px; line-height:21px;">
                                <i class="fa fa-quote-left"></i>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                <i class="fa fa-quote-right"></i>
                            </p>

                            <div class="media mt-3">
                                <div class="media-body">
                                    <div class="testimonial-author">TYRION LANNISTER</div>
                                    <div class="testimonial-author-position">Founder-Ceo. Dell Corp</div>
                                </div>
                                <img :src="avatar" width="50" class="ml-3" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header"><h4 class="card-title">Web Server</h4></div>
                        <div class="card-body">
                            <div style="height:200px;background:#efefef;border:1px dashed #aaa;
                                         display:flex;align-items:center;justify-content:center;opacity:0.7;">
                                CPU Load Placeholder
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header"><h4 class="card-title">Country</h4></div>
                        <div class="card-body">

                            <div style="height:280px; background:#fff; border:1px solid #ddd;
                                         display:flex; align-items:center; justify-content:center;">
                                <svg viewBox="0 0 800 400" width="100%" height="100%" style="opacity:0.9;">
                                    <path fill="#d6d6d6" d="M100 150 L150 130 L200 160 L180 200 Z" />
                                    <path fill="#bfbfbf" d="M250 100 L300 80 L350 120 L330 160 Z" />
                                    <path fill="#b3b3b3" d="M400 150 L450 130 L500 140 L470 180 Z" />
                                    <path fill="#c9c9c9" d="M550 180 L600 160 L650 190 L620 230 Z" />
                                    <path fill="#d0d0d0" d="M300 220 L350 200 L400 230 L380 270 Z" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card">
                        <div class="card-header"><h4 class="card-title">New Orders</h4></div>
                        <div class="card-body">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th><th>Name</th><th>Product</th><th>Qty</th><th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="(o, i) in orders" :key="i">
                                        <td><img :src="avatar" width="35" /></td>
                                        <td>{{ o.name }}</td>
                                        <td>{{ o.product }}</td>
                                        <td>{{ o.qty }}</td>
                                        <td>
                                            <span :class="['badge', o.statusClass]">
                                                {{ o.status }}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    </template>

<script>
export default {
    data() {
        return {
            avatar: "./assets/images/avatar/1.png",

            statCards: [
                { title: "Today Expenses", value: 8500, color: "progress-bar-success", width: "85%" },
                { title: "Income Detail", value: 7800, color: "progress-bar-primary", width: "75%" },
                { title: "Task Completed", value: 500, color: "progress-bar-warning", width: "50%" },
                { title: "Task Completed", value: 650, color: "progress-bar-danger", width: "65%" },
            ],

            projects: [
                { name: "Website", width: "40%", percent: 40 },
                { name: "Android", width: "60%", percent: 60 },
                { name: "IOS", width: "70%", percent: 70 },
                { name: "Mobile", width: "90%", percent: 90 },
            ],

            orders: [
                { name: "Lew Shawon", product: "Dell-985", qty: "456 pcs", status: "Done", statusClass: "badge-success" },
                { name: "Lew Shawon", product: "Asus-565", qty: "456 pcs", status: "Pending", statusClass: "badge-warning" },
                { name: "Lew Shawon", product: "Dell-985", qty: "456 pcs", status: "Done", statusClass: "badge-success" },
            ]
        }
    }
}
</script>

<style scoped>
.widget-line-list {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}
.widget-line-list li {
    padding: 10px 20px;
    text-align: center;
}
</style>