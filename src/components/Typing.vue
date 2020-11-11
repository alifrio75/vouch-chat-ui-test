//Here some typing animation
//use animation delay
<template>
    <div class="typing">
        <div class="typing__dots" />
        <div class="typing__dots" />
        <div class="typing__dots" />
    </div>
</template>

<style lang="scss" scoped>
.typing {
    display: flex;
    &__dots{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 3px;
        background: var(--v-primary-base);
        animation: wave 900ms infinite ease-in-out;
        &:nth-child(1){
            animation-delay: 0s;
        }
        &:nth-child(2){
            animation-delay: 100ms;
        }
        &:nth-child(3){
            animation-delay: 200ms;
        }
    }
}

@keyframes wave {
	0%, 60%, 100% {
		transform: initial;
        opacity: 1;
	}

	30% {
		transform: translateY(-15px);
        opacity: 0;
	}
}
</style>