// js/layout.js

/**
 * 渲染导航栏
 * @param {string} activePage - 'home' | 'products' | 'cases' | 'about' | 'contact'
 */
function renderNavbar(activePage) {
    // 样式定义
    const activeClass = "text-tesai-blue font-bold border-b-2 border-blue-500 pb-1";
    const normalClass = "text-gray-600 hover:text-tesai-blue font-medium";

    // 判断高亮逻辑
    const homeStyle = activePage === 'home' ? activeClass : normalClass;
    const prodStyle = activePage === 'products' ? activeClass : normalClass;
    const caseStyle = activePage === 'cases' ? activeClass : normalClass;
    const aboutStyle = activePage === 'about' ? activeClass : normalClass;
    const contactStyle = activePage === 'contact' ? activeClass : normalClass;

    const html = `
    <nav class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center" style="height: 110px;">
                <div class="flex items-center">
                    <a href="index.html" class="flex items-center h-full">
                        <img src="./tesai-logo.png" alt="Logo" class="h-20 md:h-24 w-auto object-contain">
                    </a>
                </div>

                <div class="hidden md:flex items-center space-x-12">
                    <a href="index.html" class="text-lg transition ${homeStyle}">首页</a>
                    
                    <a href="index.html#products" class="text-lg transition ${prodStyle}">产品中心</a>
                    
                    <a href="#" class="text-lg transition ${caseStyle}">技术案例</a>
                    
                    <a href="index.html#about" class="text-lg transition ${aboutStyle}">关于我们</a>
                    
                    <a href="#contact" class="text-lg transition ${contactStyle}">联系我们</a>
                </div>

                <div class="md:hidden flex items-center">
                    <button onclick="toggleMobileMenu()" class="text-gray-700 hover:text-tesai-orange p-2 focus:outline-none">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg top-[110px]">
             <div class="flex flex-col p-6 space-y-6 text-center">
                <a href="index.html" class="text-xl text-gray-700 font-medium">首页</a>
                <a href="index.html#products" class="text-xl text-gray-700 font-medium">产品中心</a>
                <a href="#" class="text-xl text-gray-700 font-medium">技术案例</a>
                <a href="index.html#about" class="text-xl text-gray-700 font-medium">关于我们</a>
                <a href="#contact" class="text-xl text-gray-700 font-medium">联系我们</a>
            </div>
        </div>
    </nav>
    `;

    document.write(html);
}

/**
 * 渲染页脚 (保持不变)
 */
function renderFooter() {
    // ... (保持之前的页脚代码不变，这里省略以节省篇幅，直接用之前的即可) ...
    const html = `
    <footer id="contact" class="bg-tesai-blue text-gray-300 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                <div class="col-span-1">
                    <h4 class="text-white text-3xl font-bold mb-8 tracking-wider">TESAI THERMAL</h4>
                    <p class="text-gray-400 text-base leading-8 mb-8">
                        上海特赛高温技术有限公司是一家专业从事电炉高温技术及相关设备和专用零配件产品的科研、开发、生产、销售、服务的高科技企业。
                    </p>
                </div>
                <div>
                    <h4 class="text-white text-xl font-bold mb-8">联系我们</h4>
                    <ul class="space-y-5 text-base">
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-tesai-orange mr-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <span>电话: 021-62741105 / 59751769<br>手机: 13901808771</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-6 h-6 text-tesai-orange mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span>邮箱: jgl@tesaithermal.com</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 text-tesai-orange mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span>地址: 上海市青浦区胜利路1680弄8幢4层</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white text-xl font-bold mb-8">快速链接</h4>
                    <ul class="space-y-4 text-base text-gray-400">
                        <li><a href="index.html" class="hover:text-tesai-orange transition">回到首页</a></li>
                        <li><a href="index.html#products" class="hover:text-tesai-orange transition">产品中心</a></li>
                        <li><a href="index.html#about" class="hover:text-tesai-orange transition">关于我们</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-blue-900/50 pt-10 text-center text-sm text-gray-500">
                <p>&copy; 2025 上海特赛高温技术有限公司 版权所有</p>
            </div>
        </div>
    </footer>
    `;
    document.write(html);
}

// 手机菜单切换逻辑
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}