<template>
  <b-navbar
    toggleable="xl"
    fixed="top"
    v-b-scrollspy:nav-scroller
    class="header-area text-white app-showcase-header is-sticky"
  >
    <div class="container-fluid container-fluid--cp-150">
      <b-link class="menu-btn" @click="toggleClass('addClass', 'active')">
        <i class="fas fa-bars"></i> <span>índice</span>
      </b-link>
      <b-navbar-brand class="navbar-brand logo-light mr-sm-auto" to="/">
        <!-- <img
          src="@/assets/img/logo/logo_horizontal_transparente.png"
          alt="logo"
        /> -->
      </b-navbar-brand>
      <b-navbar-brand class="navbar-brand logo-dark mr-sm-auto" to="/">
        <img
          src="@/assets/img/logo/logo_horizontal_transparente.png"
          alt="logo"
        />
      </b-navbar-brand>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      load: false,
      limitPosition: 200,
      scrolled: false,
      lastPosition: 500,
    };
  },
  methods: {
    // sticky menu script
    handleScroll() {
      if (
        this.lastPosition < window.scrollY &&
        this.limitPosition < window.scrollY
      ) {
        this.scrolled = true;
        // move up!
      }
      if (this.lastPosition > window.scrollY) {
        this.scrolled = true;
        // move down
      }
      this.lastPosition = window.scrollY;
      this.scrolled = window.scrollY > 50;
    },
    // overlay menu
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector("#overlay-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app-showcase-header {
  padding: 20px 15px;
  a.menu-btn {
    font-size: 25px;
    padding-right: 30px;
  }
  .header-button {
    a {
      background: rgba(46, 50, 128, 0.2);
      border-color: transparent;
    }
  }
  a.menu-btn {
    color: $theme-color--default;
    span {
      padding-left: 15px;
    }
  }
  &.is-sticky {
    padding: 10px 15px;
    a.menu-btn {
      color: $theme-color--default;
      span {
        display: none;
      }
    }
    .header-button {
      a {
        background: transparent;
        color: $theme-color--default;
        border-color: $theme-color--default;
        transition: 0.4s;
        &:hover {
          color: $white;
          background-image: linear-gradient(
            218deg,
            #022851 0,
            #0047ba 50%,
            #022851 100%
          );
        }
      }
    }
  }
  .navbar-brand {
    margin-right: 0;
  }
}
</style>