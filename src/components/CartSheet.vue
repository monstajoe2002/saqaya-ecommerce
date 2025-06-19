<template>
    <Transition name="slide">
        <aside v-if="isOpen" class="cart">
            <div class="cart__header">
                <h1 class="cart__title">Cart</h1>
                <button class="cart__close" @click="closeCart">&times;</button>
            </div>
            <div class="cart__content">
                <!-- Cart items will go here -->
            </div>
        </aside>
    </Transition>
</template>

<script lang="ts">
export default {
    name: 'CartSheet',
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeCart() {
            this.$emit('update:isOpen', false)
        }
    }
}
</script>

<style scoped>
.cart {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    background: white;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 1rem;
}

.cart__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.cart__close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Slide transition animations */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
}
</style>