<template>
    <!-- banner -->
    <div
        class="bg-cover bg-no-repeat bg-center py-36 relative"
        :style="{ backgroundImage: `url('${banner}')` }"
    >
        <div class="container">
            <!-- banner content -->
            <h1
                class="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4"
            >
                Best Collection For <br class="hidden sm:block" />
                Home Decoration
            </h1>
            <p class="text-base text-gray-600 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                <br class="hidden sm:block" />
                assumenda aliquid inventore nihil laboriosam odio
            </p>
            <!-- banner button -->
            <div class="mt-12">
                <RouterLink
                    to="/filter"
                    class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition"
                >
                    Shop now
                </RouterLink>
            </div>
            <!-- banner button end -->
            <!-- banner content end -->
        </div>
    </div>
    <!-- banner end -->

    <!-- features -->
    <div class="container py-16">
        <div
            class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center"
        >
            <Feature
                v-for="feature in featureList"
                :key="feature.id"
                :image="feature.image"
                :name="feature.name"
                :description="feature.description"
            />
        </div>
    </div>
    <!-- features end -->

    <!-- categories -->
    <div class="container pb-16">
        <h2
            class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6"
        >
            shop by category
        </h2>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
            <Category
                v-for="category in categoryList"
                :key="category.id"
                :id="category.id"
                :name="category.name"
                :image="category.image"
                :url="category.url"
            />
        </div>
    </div>
    <!-- categories end -->

    <!-- top new arrival -->
    <div class="container pb-16">
        <h2
            class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6"
        >
            top new arrival
        </h2>
        <!-- product wrapper -->
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <Card
                v-for="card in arrivalCardList"
                :key="card.id"
                v-bind="card"
            />
        </div>
        <!-- product wrapper end -->
    </div>
    <!-- top new arrival end -->

    <!-- ad section -->
    <div class="container pb-16">
        <a href="#">
            <img :src="offer" class="w-full" />
        </a>
    </div>
    <!-- ad section end -->

    <!-- recomended for you -->
    <div class="container pb-16">
        <h2
            class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6"
        >
            recomended for you
        </h2>
        <!-- product wrapper -->
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <Card
                v-for="card in recommendedCardList"
                :key="card.id"
                v-bind="card"
            />
        </div>
        <!-- product wrapper end -->
    </div>
    <!-- recomended for you end -->
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Card from '@/components/Card.vue';
import Category from './components/Category.vue';
import Feature from './components/Feature.vue';
import arrivalCards from '@/faker/home/new_arrival';
import recommendedForYou from '@/faker/home/recommended_for_you';
import categories from '@/faker/home/categories';
import banner from '@/assets/images/banner-bg.jpg';
import deliveryVan from '@/assets/images/icons/delivery-van.svg';
import moneyBack from '@/assets/images/icons/money-back.svg';
import serviceHours from '@/assets/images/icons/service-hours.svg';
import offer from '@/assets/images/offer.jpg';

const arrivalCardList = reactive(arrivalCards);
const recommendedCardList = reactive(recommendedForYou);
const categoryList = reactive(categories);

const featureList = ref([
    {
        id: 1,
        name: 'free shipping',
        description: 'Order over $200',
        image: deliveryVan,
    },
    {
        id: 2,
        name: 'Money returns',
        description: '30 Days money return',
        image: moneyBack,
    },
    {
        id: 3,
        name: '24/7 Support',
        description: 'Customer support',
        image: serviceHours,
    },
]);
</script>
