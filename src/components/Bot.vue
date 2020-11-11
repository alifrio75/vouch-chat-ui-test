<template>
    <div class="bot" :style="{transform: 'scale('+ scale +')', height: size * 1.2 + 'px', width: !large ? size+'px': null }">
        <div class="bot__wrapper">
            <div class="head">
                <div class="head__gear--hair"></div>
                <div class="head__wrapper">
                    <div class="head__gear--left"></div>
                    <div class="head__face">
                        <div class="eye">
                            <div class="eye__left"></div>
                            <div class="eye__right"></div>
                        </div>
                        <div class="mouth"></div>
                    </div>
                    <div class="head__gear--right"></div>
                </div>
            </div>
            <div class="body">
                <div>
                    <div class="body__hand body__hand--left"></div>
                </div>
                    <div class="body__main">
                        <img class="body__main--logo" src="../assets/pan_logo.svg" alt="">
                        <div class="body__main body__main--shape body__main--shadow"></div>
                        <div class="body__main body__main--shape"></div>
                    </div>
                <div>
                    <div class="body__hand body__hand--right"></div>
                </div>
            </div>
        </div>
        <v-card v-if="large" class="bot__bubble pa-6" elevation="15" rounded="xl">
            <p>Hi im Mika, your friendly digital concierge. The quick brown fox.</p>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        scale: {
            default: 0.3,
        },
        size: {
            default: 200,
        },
        large: {
            type: Boolean,
            default: false,
        },
    }
}
</script>

<style lang="scss" scoped>
.bot {
    position: relative;
    width: 100%;
    &__wrapper {
        padding: 20px 0 60px 0;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: -100px;
        left: -150px;
    }
    &__bubble {
        position: absolute;
        z-index: 1;
        top: -110%;
        left: 50%;
        width: 420px;
        font-size: 30px;
        max-width: unset;
        text-align: left;
    }
}
.head {
    width: 340px;
    margin: auto;
    position: relative;
    &__wrapper {
        display: flex;
        position: relative;
        width: 100%;
    }
    &__face {
        height: 170px;
        width: 230px;
        box-sizing: content-box;
        border-radius: 95px;
        border: 30px solid var(--v-primary-base);
        .eye {
            display: flex;
            width: 100%;
            justify-content: space-around;
            padding: 50px 0 10px 0;
            &__left {
                background: var(--v-primary-base);
                border-radius: 50%;
                border: 10px solid var(--v-primary-base);
                width: 20px;
                height: 20px;
            }
            &__right {
                border: 12px solid var(--v-primary-base);
                border-radius: 50%;
                border-bottom: 10px solid transparent;
                border-right: 10px solid transparent;
                transform: rotate(45deg);
                margin-top: 5px;
                width: 20px;
                height: 20px;
            }
        }
        .mouth {
            width: 65px;
            height: 35px;
            margin: auto;
            background: var(--v-primary-base);
            border-radius: 0 0 60px 60px;
        }
    }
    &__gear {
        &--hair {
            position: absolute;
            top: -20px;
            height: 160px;
            width: 280px;
            margin-left: 20px;
            box-sizing: content-box;
            border: 10px solid var(--v-primary-base);
            border-bottom: 20px solid transparent;
            border-radius: 95px;
            z-index: 0;
        }
        &--left{
            width: 45px;
            height: 60px;
            margin: 85px 0px 0 0px;
            background: var(--v-secondary-base);
            border-radius: 60px 0 0 60px;
        }
        &--right{
            width: 45px;
            height: 60px;
            margin: 85px 0px 0 0px;
            background: var(--v-secondary-base);
            border-radius: 0 60px 60px 0;
        }
    }
}
.body {
    margin: auto;
    display: flex;
    width: 100%;
    &__main {
        position: relative;
        width: 340px;
        &--shape {
            position: absolute;
            border-top: 250px solid var(--v-primary-base);
            border-bottom: 12px solid var(--v-primary-base);
            border-left: 100px solid transparent;
            border-right: 100px solid transparent;
            border-radius: 0 0 200px 200px;
            box-sizing: content-box;
            width: 140px;
        }
        &--shadow {
            position: absolute;
            border-top: 270px solid var(--v-secondary-base);
            border-bottom: 12px solid var(--v-secondary-base);
            transform: perspective(200px) rotateX(2deg);
        }
        &--logo {
            position: absolute;
            width: 100px;
            left: calc(50% - 50px);
            top: 40px;
            margin: auto;
            z-index: 1;
        }
    }
    &__hand {
        width: auto;
        display: flex;
        &:before {
            content: '';
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--v-primary-base);
        }
        &:after {
            content: "";
            width: 50px;
            height: 50px;
            border: 10px solid var(--v-primary-base);
            border-right: 10px solid transparent;
            border-radius: 50%;
        }
        &--left {
            transform: rotate(120deg) translate(-20px, -35px);
        }
        &--right {
            transform: rotate(-40deg) translate(-25px, -25px);
            transform-origin: 0 0px;
            animation: handwave 2s infinite;
        }
    }
}
@keyframes handwave {
    0% { transform: rotate(-40deg) translate(-25px, -25px); }
    50% { transform: rotate(-0deg) translate(-25px, -25px); }
    100% { transform: rotate(-40deg) translate(-25px, -25px); }
}
</style>