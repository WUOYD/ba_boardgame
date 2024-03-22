<template>
    <div class="content sequencer">
        <h1>Map</h1>
        
    </div>
</template>

<style scoped>
.content.sequencer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    gap: 0;
    padding: 20px 7vw 20px 7vw;
}

h1 {
    font-size: 16px;
}

/* sequencer */
#sequencer {
    width: 80vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 20px 0 15px 0;
}
</style> 

<script>
import { socket } from '../client'

export default {
    data() {
        return {
        
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>
