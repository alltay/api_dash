<template>
  <div id="app">
      <div class="col-12 loading" v-bind:class="{ 'd-none': !loading }">
        <div class="spinner-border text-success" role="status">
          <span class="sr-only ">Loading...</span>
        </div>
      </div>
 <!-- Toast  -->
      <div class="toast" style="position: fixed; top: 1%; right: 1%;" data-autohide="false">
        <div class="toast-header">
          <strong class="mr-auto">Уведомление</strong>
          <small></small>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          {{answer}}
        </div>
      </div>
 <!-- End Toast  -->
 <!-- Navbar  -->
    <nav class="navbar navbar-dark bg-dark fixed-top shadow">
      <span class="navbar-brand">
          Mirkrestikom
        <button class="navbar-toggler d-sx-inline d-md-inline d-sm-inline d-lg-none" type="button"
                v-on:click="sidebar = !sidebar">
            <span class="navbar-toggler-icon"></span>
        </button>
        </span>
      </nav>
  <!-- End Sidebar  -->
  <!-- Sidebar  -->
      <div class="bg-light sidebar d-lg-block" v-bind:class="{'d-none': sidebar}">
          <div id="v-pills-tab" role="tablist" aria-orientation="vertical" class="nav flex-column nav-pills mt-6 ml-2">
            <router-link class="nav-link text-dark" to="/admin/">
              <span class="sidebar-item">Главная</span>
            </router-link>
            <router-link class="nav-link text-dark" to="/admin/attributes">
              <span class="sidebar-item">Атрибуты</span>
            </router-link>
            <router-link class="nav-link text-dark" to="/admin/lists">
              <span class="sidebar-item" >Наборы атрибутов</span>
            </router-link>
            <router-link class="nav-link text-dark" to="/admin/filters">
              <span class="sidebar-item" >Наборы фильтрации</span>
            </router-link>
          </div>
      </div>
  <!-- End Sidebar -->
  <!-- Main content -->
      <div class="content">
        <router-view
           v-bind:meta="$route.meta"/>
    </div>
  </div>
</template>

<script>

  import { getDataMixin } from '@/mixins/getDataMixin.js'
  import { postDataMixin } from '@/mixins/postDataMixin.js'

  export default {
    mixins: [getDataMixin, postDataMixin],
    name: 'app',
    data () {
      return {
        answer:'',
        loading: false,
        sidebar: true,
        attr_params:{units:''}
      }
    },
    created () {
            document.title = "Dashboard";
    }
  }
</script>


<style>
  body { overflow-x: hidden; overflow-y: scroll;}
  .wide { width:220px; }
  .short { width:150px; font-size:0.8em; }
  .bg-dark{ background-color: #563d7c !important;}
  .btn-outline-dark { color: #563d7c !important; border-color: #563d7c !important;}
  .btn-outline-dark:hover { color: white !important; background-color: #563d7c; border-color: #563d7c; }
  .sidebar {
      padding-top: 65px;
      position:fixed;
      height:1100%;
      width:200px;
      z-index:1000;
  }
  .router-link-exact-active{ background-color: #e4e4e4; }
  .content { padding-top: 56px; padding-left: 210px; flex: 0 0 97%; max-width: 97%; }
  .spinner-border.text-success { margin-left: 45%; margin-top: 20%; }
  .loading {
      position: fixed;
      height: 1100%;
      width: 100%;
      z-index: 1060;
      background: #e5e5e57d;
   }
   .toast {z-index: 1300;}
   .col-th-5 { width:5%; }
   .col-th-10 { width:10%; }
   .col-th-15 { width:15%; }
   .col-th-20 { width:20%; }
   .col-th-20 { width:30%; }
   .col-th-20 { width:40%; }
   .col-th-50 { width:50%; }
   .col-th-60 { width:60%; }
   .col-th-70 { width:70%; }
   .col-th-80 { width:80%; }
    @media screen and (max-width: 992px) {
      .content { padding-top: 56px; padding-left: 0px; flex: 0 0 97%; max-width: 97%; }
   }
   @media screen and (min-width: 992px) {
      .input-group-text { width: 220px;}
      .input-group-text-short { width: 70px; }
   }
</style>
