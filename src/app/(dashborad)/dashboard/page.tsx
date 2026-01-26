import Link from 'next/link'

const page = () => {
  return (
    <>
      <main className="max-w-350 mx-auto px-6 lg:px-20 py-8">
        {/* <!-- Breadcrumbs --> */}
        <div className="flex items-center gap-2 mb-6">
          <Link className="text-primary text-sm font-medium" href="#">Admin</Link>
          <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Inventory Management</span>
        </div>
        {/* <!-- Page Heading & CTA --> */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Product Inventory</h1>
            <p className="text-gray-500 dark:text-gray-400">Curate and manage your marketplace listings across all
              regions.</p>
          </div>
          <button
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Add New Product
          </button>
        </div>
        {/* <!-- KPI Stats Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div
            className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Total Products</p>
              <p className="text-3xl font-bold">1,482</p>
              <p className="text-xs font-bold text-green-600 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">trending_up</span> +8.2% vs last month
              </p>
            </div>
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
          </div>
          <div
            className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Total Users</p>
              <p className="text-3xl font-bold">4,129</p>
              <p className="text-xs font-bold text-green-600 mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">trending_up</span> +12% new artists
              </p>
            </div>
            <div className="bg-accent-bronze/10 p-3 rounded-full text-accent-bronze">
              <span className="material-symbols-outlined">group</span>
            </div>
          </div>
          <div
            className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">New Reviews</p>
              <p className="text-3xl font-bold">24</p>
              <p className="text-xs font-bold text-primary mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">mark_chat_unread</span> Pending moderation
              </p>
            </div>
            <div className="bg-primary/10 p-3 rounded-full text-primary">
              <span className="material-symbols-outlined">reviews</span>
            </div>
          </div>
        </div>
        {/* <!-- Main Product Table Container --> */}
        <div
          className="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
          <div
            className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
            <h3 className="font-bold text-lg">Product Catalog</h3>
            <div className="flex gap-2">
              <button
                className="p-2 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-xl">filter_list</span>
              </button>
              <button
                className="p-2 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-xl">file_download</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                  <th
                    className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">
                    Product Details</th>
                  <th
                    className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700">
                    Category</th>
                  <th
                    className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 text-right">
                    Price</th>
                  <th
                    className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 text-center">
                    Stock</th>
                  <th
                    className="p-4 text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-gray-700 text-right">
                    Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {/* <!-- Row 1 --> */}
                <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-cover bg-center border border-gray-100 dark:border-gray-600"
                        data-alt="Handcrafted ceramic vase"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsD1gUdWsexl-Kgrzc7qCrfA5TqfQ5JbmoluVYAP_bNNpNpT47cHo_oqnhTj3cbtiUXK8k85WHeXD3zLN3mZ3-XXNLRn-hUiK23_Mq1z4wknTXH1KEBwco1SH1gJSULb-hv6OKzqEv7Zf6V_bQJ3Qu6tXW_U2jgNuat9cgUUY_SmsDtVkAYGv4s44AgXD5SPyzusnjh2aSV07VJL3dSMN3yCHmaZCBsYSpKTSRtp3AP2dpCBeA9upsipQ3CWajEIWXmZ6ore9VKePS')" }}>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Ethereal Blue Vase</p>
                        <p className="text-xs text-gray-400">SKU: ART-0012</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className="px-3 py-1 bg-primary/10 text-primary text-[11px] font-bold rounded-full uppercase tracking-wider">Ceramics</span>
                  </td>
                  <td className="p-4 text-right">
                    <p className="font-bold text-sm">$185.00</p>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium">12</span>
                      <div
                        className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                        <div className="bg-primary h-full w-[40%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div
                      className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-2 text-accent-bronze hover:bg-accent-bronze/10 rounded-lg transition-colors"
                        title="Edit">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 2 --> */}
                <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-cover bg-center border border-gray-100 dark:border-gray-600"
                        data-alt="Silk woven textile"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfL7CL1T16QwjvfjniwzTvNr05IbkuxwQ-vvze6dS0FBPLCTAXJ0Mj0m7Rf6ha28tX7lx7MLluNmSW10WZ6omZTF9eurHdCMK3QilQdtiPkyeGc5nS1mqi8d65suzlyc2npEz_DaXiAwnhBEBN-JYC_22gAtnR5Nb61JKKniImGHcqSWOHyOHh1gRXDHcgJ-KmKPjqGqHhyjqOMr2oL0eCZNYw2lDgKbY_WcGTlMaNRAeeU3al5sMcnfRX8hukpvzFW_4f3WuhKFiO')" }}>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Woven Silk Scarf</p>
                        <p className="text-xs text-gray-400">SKU: TEX-9901</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className="px-3 py-1 bg-accent-bronze/10 text-accent-bronze text-[11px] font-bold rounded-full uppercase tracking-wider">Textiles</span>
                  </td>
                  <td className="p-4 text-right">
                    <p className="font-bold text-sm">$240.00</p>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium text-amber-500">3</span>
                      <div
                        className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                        <div className="bg-amber-500 h-full w-[10%]"></div>
                      </div>
                      <p className="text-[9px] font-bold text-amber-600 mt-1">LOW STOCK</p>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div
                      className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-2 text-accent-bronze hover:bg-accent-bronze/10 rounded-lg transition-colors"
                        title="Edit">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* <!-- Row 3 --> */}
                <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-cover bg-center border border-gray-100 dark:border-gray-600"
                        data-alt="Modernist gold ring"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVfGVzoQ8HNoqc49ysT_0zP2DES_J02lPl7ygAdXIUnN2GshWy6hAMadr-vSmAw4RlylfYDSGUo6MzEEXIQ4nVhTK7Ju9vrDTCP3SxNEvCfwGSbzWfQL6QuKE6yPrfMr4T2wN8ndQpKPy4vSZpTcXlbaStxWZRzYGSrwHSxinrYNj1MLwninlQynMgEhGEcz-iE6fG-iGc6rEk0q4-pzrHQOLZnOmNuO7pDw1-LSC1gv4AifYITcmsQp9k1b0jAyQmoCeEW3G83wxH')" }}>
                      </div>
                      <div>
                        <p className="font-bold text-sm">Minimalist Gold Band</p>
                        <p className="text-xs text-gray-400">SKU: JWL-2241</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 text-[11px] font-bold rounded-full uppercase tracking-wider">Jewelry</span>
                  </td>
                  <td className="p-4 text-right">
                    <p className="font-bold text-sm">$1,200.00</p>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-medium">8</span>
                      <div
                        className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                        <div className="bg-primary h-full w-[25%]"></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div
                      className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-2 text-accent-bronze hover:bg-accent-bronze/10 rounded-lg transition-colors"
                        title="Edit">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                      <button className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- Pagination --> */}
          <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <p className="text-xs text-gray-400">Showing 1 to 10 of 1,482 entries</p>
            <div className="flex gap-1">
              <button
                className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50"
                disabled>Previous</button>
              <button className="px-3 py-1 rounded bg-primary text-white text-xs font-bold">1</button>
              <button
                className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800">2</button>
              <button
                className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800">3</button>
              <button
                className="px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800">Next</button>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- Modal Backdrop (Hidden by Default - logic would trigger this) --> */}
      <div className="fixed inset-0 z-60 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 hidden">
        <div
          className="bg-surface-light dark:bg-surface-dark w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
          <div
            className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-gray-50/50 dark:bg-gray-800/50">
            <div>
              <h2 className="text-2xl font-bold">Add New Masterpiece</h2>
              <p className="text-sm text-gray-500">Fill in the bilingual details for your new listing.</p>
            </div>
            <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
            <form className="space-y-8">
              {/* <!-- Dual Language Titles --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">language</span>
                    Product Name (English)
                  </label>
                  <input
                    className="w-full rounded-xl border-gray-200 dark:border-gray-600 bg-transparent focus:ring-primary focus:border-primary"
                    placeholder="e.g. Traditional Clay Pot" type="text" />
                </div>
                <div className="space-y-2 text-right">
                  <label className="text-sm font-bold flex items-center gap-2 justify-end">
                    (العربية) اسم المنتج
                    <span className="material-symbols-outlined text-accent-bronze text-sm">translate</span>
                  </label>
                  <input
                    className="w-full rounded-xl border-gray-200 dark:border-gray-600 bg-transparent focus:ring-primary focus:border-primary"
                    dir="rtl" placeholder="مثال: وعاء فخاري تقليدي" type="text" />
                </div>
              </div>
              {/* <!-- Descriptions --> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Description (English)</label>
                  <textarea
                    className="w-full rounded-xl border-gray-200 dark:border-gray-600 bg-transparent focus:ring-primary focus:border-primary placeholder:text-gray-300"
                    rows={4}></textarea>
                </div>
                <div className="space-y-2 text-right">
                  <label className="text-sm font-bold">الوصف (العربية)</label>
                  <textarea
                    className="w-full rounded-xl border-gray-200 dark:border-gray-600 bg-transparent focus:ring-primary focus:border-primary placeholder:text-gray-300"
                    dir="rtl" rows={4}></textarea>
                </div>
              </div>
              {/* <!-- Pricing and Stock --> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Base Price ($)</label>
                  <input
                    className="w-full rounded-xl border-gray-200 dark:border-gray-600 bg-transparent focus:ring-primary focus:border-primary"
                    step="0.01" type="number" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Stock Quantity</label>
                  <input
                    className="w-full rounded-xl border-gray-200 dark:border-gray-600 bg-transparent focus:ring-primary focus:border-primary"
                    type="number" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Category</label>
                  <select
                    className="w-full rounded-xl border-gray-200 dark:border-gray-600 bg-transparent focus:ring-primary focus:border-primary">
                    <option>Select Category</option>
                    <option>Ceramics</option>
                    <option>Textiles</option>
                    <option>Jewelry</option>
                    <option>Woodwork</option>
                  </select>
                </div>
              </div>
              {/* <!-- Media Upload Preview Section --> */}
              <div className="space-y-4">
                <label className="text-sm font-bold">Product Imagery</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div
                    className="aspect-square rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-600 flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors cursor-pointer group">
                    <span
                      className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">add_photo_alternate</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Add Image</span>
                  </div>
                  {/* <!-- Mock Uploaded Image --> */}
                  <div className="aspect-square rounded-xl bg-cover bg-center relative overflow-hidden group"
                    data-alt="Product detail view"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCR-caooy_VlA_yEUoUBYZ772Th4L948atROt-O25wBGNBIELyMyceWKsN_IsBtAjo4FaKSMGeUJF101cSYHJMNy9t4XImxFRKI8FM024zwSk5MOoYTXkaVt12pXDHLqw5QCEHKSDIrMh6pTtFFksVeMboddnfHXiayfdFug3sTxz9qrQnQGH0R4OXLQmZ-i3OmhAN9QGMhyFyFeL9WEs1sl-tP-9C6gDSmsfiwwqR6jzHrd9gUw7k8UlNiE113GkN1106tutIF_5zb')" }}>
                    <div
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-red-500 text-white p-1 rounded-full" type="button"><span
                        className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            className="p-6 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 flex justify-end gap-3">
            <button className="px-6 py-2 text-sm font-bold text-gray-500 hover:text-gray-700 transition-colors">Discard
              Draft</button>
            <button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">Publish
              Product</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default page