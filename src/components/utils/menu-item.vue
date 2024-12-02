<template>
    <div class="flex flex-col gap-2 px-6">
      <li v-for="(item, idx) in menuItems" :key="idx">
        <div class="menu-item">
          <span
            class="menu-item-link flex justify-between items-center w-full text-white rounded-[30px] px-[16px] py-[10px]"
            role="button"
            @click="menuClick(item)"
            :class="{ 'text-primary bg-[#ffffff14] ml-4': item.parent === routeParent }"
          >
            <div class="flex gap-2 items-center">
              <i-icon :icon="item.icon" v-if="item.icon" class="menu-item-icon" />
              <span class="flex flex-column text-[14px] capitalize">
                <span class="font-medium" :class="item.header ? 'menu-title-header' : 'menu-title'">
                  {{ item.label.split('-').join(' ') }}
                </span>
              </span>
            </div>
  
            <!-- <span v-if="item.hasChildren">
              <i-icon
                :icon="subMenu === item.parent ? 'prime:angle-down' : 'prime:angle-right'"
                width="22px"
              />
            </span> -->
          </span>
          <!-- <div class="flex flex-col gap-3 mt-2 ml-12" v-if="subMenu === item.parent">
            <span
              role="button"
              class=""
              v-for="(data, idx) in item.children"
              :key="idx"
              @click="$router.push(data.url)"
            >
              <span
                class="sub-menu-items flex text-[13px] gap-2 items-center py-1 px-2 text-gray-200 "
                :class="[data.subItem !== subMenuRouteName ? 'border-l border-l-2 border-primary-200' : '']"
              >
                <i-icon :icon="data.icon" class="menu-item-icon" />
                <span class="sub-menu-title"> {{ data.title }} </span>
              </span>
            </span>
          </div> -->
        </div>
      </li>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      menuItems: {
        type: Array,
        default: () => []
      }
    },
  
    methods: {
      // goToLink(item) {
      //   this.$router.push({ path: item.url }).catch(() => {})
      // },
  
      // openSubMenu(item) {
      //   let value = this.subMenu === item.parent ? null : item.parent
      //   this.$store.dispatch('drawer/setSubMenu', value)
      // }
  
      menuClick(item) {
        item.isLink ? this.$emit('menuClick', item) : item.parent == 'logout' ? this.logout() : ''
        // console.log(item);
      },
  
  
      logout() {
        this.$emit('closeDrawer')
        this.$swal
          .fire({
            title: 'Uhhhh! 😔',
            text: 'Are you sure you want to log out?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, logout!'
          })
          .then((result) => {
            console.log(result, 'kkk')
            if (result.isConfirmed) {
              this.userLogout()
            }
          })
      },
  
      userLogout() {
        this.$store.dispatch('auth/logout')
        this.$swal
          .fire({
            title: 'Woo hoo 😫',
            text: 'Logged out succesfully',
            icon: 'success',
            confirmButtonText: 'Ok!'
          })
          .then((result) => {
            console.log(result, 'kkk')
            if (result.isConfirmed) {
              this.$router.push('/login')
            }
          })
      }
    },
  
    computed: {
      routeParent() {
        return this.$route.meta.parent
      },
      
      subMenu() {
        return this.$store.state.drawer.subMenu
      },
  
      subMenuRouteName(){
        return this.$route.meta.subName
      }
    }
  }
  </script>
  
  <style></style>
  