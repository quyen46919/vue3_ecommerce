<template>
    <!-- breadcrum -->
    <div class="py-4 container flex gap-3 items-center">
        <a href="index.html" class="text-primary text-base">
            <i class="fas fa-home"></i>
        </a>
        <span class="text-sm text-gray-400"
            ><i class="fas fa-chevron-right"></i
        ></span>
        <a
            href="shop.html"
            class="text-primary text-base font-medium uppercase"
        >
            {{ productDetail?.category }}
        </a>
        <span class="text-sm text-gray-400"
            ><i class="fas fa-chevron-right"></i
        ></span>
        <p class="text-gray-600 font-medium uppercase">
            {{ productDetail?.name }}
        </p>
    </div>
    <!-- breadcrum end -->

    <!-- product view -->
    <div class="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
        <!-- product image -->
        <div>
            <div>
                <img id="main-img" :src="targetImage" class="w-full" />
            </div>
            <div class="grid grid-cols-5 gap-4 mt-4">
                <div v-for="image in productDetail?.imageList" :key="image">
                    <img
                        :src="image"
                        :class="
                            'single-img w-full cursor-pointer ' +
                            [targetImage === image && 'border border-primary']
                        "
                        @click="handleChangeImage(image)"
                    />
                </div>
            </div>
        </div>
        <!-- product image end -->
        <!-- product content -->
        <div>
            <h2 class="md:text-3xl text-2xl font-medium uppercase mb-2">
                {{ productDetail.name }}
            </h2>
            <div class="flex items-center mb-4">
                <Rating :rating="productDetail.rating" />
                <div class="text-xs text-gray-500 ml-3">
                    ({{ productDetail.reviewCount }} Reviews)
                </div>
            </div>
            <div class="space-y-2">
                <p class="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    <span
                        :class="[
                            productDetail.inStock
                                ? 'text-green-600'
                                : 'text-red-600',
                        ]"
                        >{{
                            productDetail.inStock ? 'In stock' : 'Out of stock'
                        }}</span
                    >
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Brand: </span>
                    <span class="text-gray-600">{{ productDetail.brand }}</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Category: </span>
                    <span class="text-gray-600">{{
                        productDetail.category
                    }}</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">SKU: </span>
                    <span class="text-gray-600">{{ productDetail.SKU }}</span>
                </p>
            </div>
            <div class="mt-4 flex items-baseline gap-3">
                <span class="text-primary font-semibold text-xl"
                    >${{ discountedPrice }}</span
                >
                <span class="text-gray-500 text-base line-through"
                    >${{ productDetail?.price }}</span
                >
            </div>
            <p class="mt-4 text-gray-600">
                {{ productDetail.description }}
            </p>
            <!-- size -->
            <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">Size</h3>
                <div class="flex items-center gap-2">
                    <!-- single size -->
                    <div
                        v-for="size in sizeList"
                        :key="size"
                        class="size-selector"
                    >
                        <input
                            type="radio"
                            name="size"
                            class="hidden"
                            :id="'size-' + size"
                            :value="size"
                            v-model="targetSize"
                        />
                        <label
                            :for="'size-' + size"
                            class="text-xs border border-gray-200 rounded-sm h-6 w-fit px-2 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                            @click="handleSizeChange(size)"
                        >
                            {{ size }}
                        </label>
                    </div>
                    <!-- single size end -->
                </div>
            </div>
            <!-- size end -->
            <!-- color -->
            <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">Color</h3>
                <div class="flex items-center gap-2">
                    <!-- single color -->
                    <div
                        v-for="color in colorList"
                        :key="color"
                        class="color-selector"
                    >
                        <input
                            type="radio"
                            name="color"
                            class="hidden"
                            :id="'color-' + color"
                            :value="color"
                            v-model="targetColor"
                        />
                        <label
                            :for="'color-' + color"
                            :style="'background-color:' + color"
                            class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                            @click="handleColorChange(color)"
                        >
                        </label>
                    </div>
                    <!-- single color end -->
                </div>
            </div>
            <!-- color end -->
            <!-- quantity -->
            <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">Quantity</h3>
                <div
                    class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max"
                >
                    <div
                        class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                        @click="handleChangeQuantity('decrement')"
                    >
                        -
                    </div>
                    <div class="h-8 w-10 flex items-center justify-center">
                        {{ targetQuantity }}
                    </div>
                    <div
                        class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                        @click="handleChangeQuantity('increment')"
                    >
                        +
                    </div>
                </div>
            </div>
            <!-- color end -->
            <!-- add to cart button -->
            <div class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                <div
                    v-if="!isAlreadyInCart"
                    class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm flex items-center cursor-pointer"
                    @click="handleAddToCart"
                >
                    <span class="mr-2"
                        ><i class="fas fa-shopping-bag"></i
                    ></span>
                    Add to cart
                </div>
                <div
                    v-if="isAlreadyInCart"
                    class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm flex items-center cursor-pointer"
                    @click="handleRemoveFromCart"
                >
                    <span class="mr-2"><i class="fa-solid fa-xmark"></i></span>
                    Remove from cart
                </div>
                <div
                    v-if="!isAlreadyInWishlist"
                    class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm cursor-pointer"
                    @click="handleAddToWishlist"
                >
                    <span class="mr-2"><i class="far fa-heart"></i></span>
                    Wishlist
                </div>
                <div
                    v-if="isAlreadyInWishlist"
                    class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm cursor-pointer"
                    @click="handleRemoveFromWishlist"
                >
                    <span class="mr-2"
                        ><i class="fa-solid fa-heart-crack"></i
                    ></span>
                    Remove from Wishlist
                </div>
            </div>
            <!-- add to cart button end -->
            <!-- product share icons -->
            <div class="flex space-x-3 mt-4">
                <a
                    href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a
                    href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                    <i class="fab fa-twitter"></i>
                </a>
                <a
                    href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                >
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            <!-- product share icons end -->
        </div>
        <!-- product content end -->
    </div>
    <!-- product view end -->

    <!-- product details and review -->
    <div class="container pb-16">
        <!-- detail buttons -->
        <h3
            class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium"
        >
            Product Details
        </h3>
        <!-- details button end -->

        <!-- details content -->
        <div class="lg:w-4/5 xl:w-3/5 pt-6">
            <div class="space-y-3 text-gray-600">
                <p>
                    Incredible graphics performanceMacBook Air can take on more
                    graphics-intensive projects than ever. For the first time,
                    content creators can edit and seamlessly play back multiple
                    streams of full‑quality 4K video without dropping a frame.
                </p>
                <p>
                    Incredible graphics performanceMacBook Air can take on more
                    graphics-intensive projects than ever. For the first time,
                    content creators can edit and seamlessly play back multiple
                    streams of full‑quality 4K video without dropping a frame.
                </p>
                <p>
                    Apps on MacBook Air can use machine learning (ML) to
                    automatically retouch photos like a pro, make smart tools
                    such as magic wands and audio filters more accurate at
                    auto‑detection, and so much more. That’s not just brain
                    power — that’s the power of a full stack of ML technologies.
                </p>
            </div>
            <!-- details table -->
            <table
                class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6"
            >
                <tr>
                    <th
                        class="py-2 px-4 border border-gray-300 w-40 font-medium"
                    >
                        Color
                    </th>
                    <td class="py-2 px-4 border border-gray-300">
                        Black, Brown, Red
                    </td>
                </tr>
                <tr>
                    <th
                        class="py-2 px-4 border border-gray-300 w-40 font-medium"
                    >
                        Material
                    </th>
                    <td class="py-2 px-4 border border-gray-300">
                        Artificial Leather
                    </td>
                </tr>
                <tr>
                    <th
                        class="py-2 px-4 border border-gray-300 w-40 font-medium"
                    >
                        Weight
                    </th>
                    <td class="py-2 px-4 border border-gray-300">55kg</td>
                </tr>
            </table>
            <!-- details table -->
        </div>
        <!-- details content end -->
    </div>
    <!-- product details and review end -->

    <!-- related products -->
    <div class="container pb-16">
        <h2
            class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6"
        >
            related products
        </h2>
        <!-- product wrapper -->
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <Card
                v-for="product in relativePrds"
                :key="product.id"
                v-bind="product"
            />
        </div>
        <!-- product wrapper end -->
    </div>
    <!-- related products end -->
</template>

<script setup lang="ts">
import relativePrd from '@/faker/productDetail/related_products';
import defaultPrd from '@/faker/productDetail/product';
import allProduct from '@/faker/index';
import CardProps from '@/interfaces/card';
import Rating from '@/components/Rating.vue';
import Card from '@/components/Card.vue';
import { computed, reactive, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useWishList } from '@/store/wishlistStore';
import { useCart } from '@/store/cartStore';
const route = useRoute();
const wishlistStore = useWishList();
const cartStore = useCart();

const productDetail = reactive<CardProps>(
    allProduct.find((product) => product.id === route.params.id) || defaultPrd
);
const relativePrds = ref(relativePrd);

// image galery logic
const targetImage = ref<string>(productDetail.imageList?.[0] || '');

const handleChangeImage = (image: string) => {
    targetImage.value = image;
};

// price logic
const discountedPrice = computed(() => {
    return Number(
        productDetail?.price -
            (productDetail?.price * productDetail?.discount) / 100
    ).toFixed(2);
});

// size logic
const sizeList = computed(() => productDetail.sizes.map((size) => size.name));
const targetSize = ref<string>('XS');

const handleSizeChange = (size: string) => {
    targetSize.value = size;
    targetQuantity.value = 1;
};

// color logic
const targetColor = ref<string>('');
const colorList = computed(() =>
    productDetail.sizes
        .map((size) =>
            size.items.map((item) =>
                size.name === targetSize.value ? item.color : undefined
            )
        )
        .flat()
        .filter((item) => !!item)
);

const handleColorChange = (color?: string) => {
    targetColor.value = color || '';
    targetQuantity.value = 1;
};

watchEffect(() => {
    targetColor.value = colorList.value?.[0] || '';
});

// Quantity logic
const targetQuantity = ref<number>(1);

const maxQuantity = computed(() => {
    const size = productDetail.sizes.find(
        (size) => size.name === targetSize.value
    );
    const item = size?.items.find((item) => {
        return item.color === targetColor.value;
    });
    return item?.quantity || 0;
});

const handleChangeQuantity = (type: 'increment' | 'decrement') => {
    if (type === 'increment') {
        if (targetQuantity.value >= maxQuantity.value) return;
        targetQuantity.value += 1;
    } else {
        if (targetQuantity.value > 1) {
            targetQuantity.value -= 1;
        }
    }
};

// store logic
const isAlreadyInWishlist = computed(() => {
    return wishlistStore.isAlreadyInWishlist(productDetail.id);
});

const handleAddToWishlist = () => {
    wishlistStore.addToWishlist(productDetail);
};

const handleRemoveFromWishlist = () => {
    wishlistStore.removeFromWishlist(productDetail.id);
};

const isAlreadyInCart = computed(() => {
    return cartStore.isAlreadyInCart(productDetail.id);
});

const handleAddToCart = () => {
    cartStore.addToCart({
        id: productDetail.id,
        name: productDetail.name,
        imageList: productDetail.imageList,
        price: productDetail.price,
        discount: productDetail.discount,
        targetSize: targetSize.value,
        targetColor: targetColor.value,
        targetQuantity: targetQuantity.value,
        quantity:
            productDetail.sizes
                .find((size) => size.name === targetSize.value)
                ?.items.find((item) => {
                    return item.color === targetColor.value;
                })?.quantity || 0,
    });
};

const handleRemoveFromCart = () => {
    cartStore.removeFromCart(productDetail.id);
};
</script>
