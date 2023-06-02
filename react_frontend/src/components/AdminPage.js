import React from 'react'

function CompanyAdminPage() {
  return (
    <div className="ml-4 mt-2 h-screen bg-gray-100 text-gray-900 tracking-wider leading-normal">
      <div className="container w-full md:max-w-5xl mx-auto pt-20">
        <div class="container p-2 mx-auto sm:p-4 dark:text-gray-100">
          <h2 class="mb-4 text-2xl font-semibold leading-tight">Emails</h2>
          <div class="flex flex-col overflow-x-auto text-xs">
            <div class="flex text-left dark:bg-gray-700">
              <div class="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                <input type="checkbox" name="All" class="w-3 h-3 rounded-sm accent-violet-400" />
              </div>
              <div class="w-32 px-2 py-3 sm:p-3">Sender</div>
              <div class="flex-1 px-2 py-3 sm:p-3">Message</div>
              <div class="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block">Received</div>
            </div>
            <div class="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
              <div class="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
                <input type="checkbox" class="w-3 h-3 rounded-sm accent-violet-400" name="Box0" />
              </div>
              <div class="w-32 px-2 py-3 sm:p-3">
                <p>Tracy Kim</p>
              </div>
              <div class="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">An cum minimum voluptua repudiandae, nec illum essent et. Id tibique voluptatum per, eos eu civibus mnesarchum intellegam. An mundi detracto usu, diceret deserunt lobortis te cum.</div>
              <div class="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-400">
                <p>5min ago</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyAdminPage;