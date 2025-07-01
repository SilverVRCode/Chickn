<template>
  <button @click="toggleSidebar" data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <SvgIcon
      is="menu"
      color="currentColor"
      size="24px"
      class="w-6 h-6"
    />
  </button>

  <aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <a href="#" class="p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group flex items-center">
            <SvgIcon
              is="home"
              color="currentColor"
              size="20px"
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
            <span class="ms-3 text-left">Home</span>
          </a>
        </li>
        <li>
          <a href="#" class="p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group flex items-center">
            <SvgIcon
              is="recipes"
              color="currentColor"
              size="20px"
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
            <span class="flex-1 ms-3 whitespace-nowrap text-left">Recipes</span>
          </a>
        </li>
        <li>
          <a href="#" class="p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group flex items-center">
            <SvgIcon
              is="history"
              color="currentColor"
              size="20px"
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            />
            <span class="flex-1 ms-3 whitespace-nowrap text-left">History</span>
          </a>
        </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
        <li v-if="isAuthenticated" class="relative">
          <div
            class="flex items-center p-2 rounded-lg bg-gray-100 dark:bg-gray-700 cursor-pointer"
            @click="toggleUserMenu"
          >
            <img
              :src="user.picture"
              :alt="user.name"
              class="w-8 h-8 rounded-full mr-3"
            />
            <span class="flex-1 ms-3 whitespace-nowrap text-left">{{ user.name }}</span>
          </div>
          <div
            v-if="showUserMenu"
            class="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50"
          >
            <ul>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white cursor-not-allowed opacity-60">
                  Profile
                </a>
              </li>
              <li>
                <a @click.prevent="handleSignOut" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </li>
        <template v-else>
          <li>
            <a @click.prevent="login" href="#" class="p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group flex items-center">
              <SvgIcon
                is="login"
                color="currentColor"
                size="20px"
                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="flex-1 ms-3 whitespace-nowrap text-left">Sign In</span>
            </a>
          </li>
          <li>
            <a @click.prevent="login" href="#" class="p-2 text-left text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group flex items-center">
              <SvgIcon
                is="search"
                color="currentColor"
                size="20px"
                class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="flex-1 ms-3 whitespace-nowrap text-left">Sign Up</span>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import SvgIcon from './SvgIcon.vue';

const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
const showUserMenu = ref(false);

function login() {
  loginWithRedirect();
}

function toggleSidebar() {
  const sidebar = document.getElementById('separator-sidebar');
  sidebar.classList.toggle('-translate-x-full');
}

function toggleUserMenu() {
  showUserMenu.value = !showUserMenu.value;
}

function handleSignOut() {
  logout({ returnTo: window.location.origin });
}
</script>