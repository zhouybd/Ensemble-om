<template>
  <v-card>
    <v-toolbar card color="white">
      <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Type something"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
      ></v-text-field>
      <v-btn icon>
        <v-icon>filter_list</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <v-container grid-list-xl fluid v-if="search==''">
      <v-layout row wrap>
      <v-flex sm12>
        <h4>热点产品</h4>
      </v-flex>
      <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'bottom-nav' + index">
        <name-card
                bottom-nav
                v-bind="item"
        >
        </name-card>
      </v-flex>
      </v-layout>
      </v-container>
      <v-data-table
              v-else
              :headers="complex.headers"
              :search="search"
              :items="complex.items"
              :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
              class="elevation-1"
              item-key="name"
              select-all
              v-model="complex.selected"
      >
        <template slot="items" slot-scope="props" >
          <td>
            <v-checkbox
                    primary
                    hide-details
                    v-model="props.selected"
            ></v-checkbox>
          </td>
          <td>
            <v-avatar size="32">
              <img :src="props.item.avatar" alt="">
            </v-avatar>
          </td>
          <td>{{ props.item.prodCode }}</td>
          <td>{{ props.item.prodType }}</td>
          <td>{{ props.item.status }}</td>
          <td>
            <v-btn depressed outline icon fab dark color="primary" small>
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn depressed outline icon fab dark color="pink" small>
              <v-icon>delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script>
    getDepositProdInfo
    import {
        getDepositProdInfo
    } from '@/api/prod';
    import prodListCmb from '../tableFlow/prodListCmb'
    import NameCard from '@/components/widgets/card/NameCard';
    export default {
        components: {
            prodListCmb,
            NameCard
        },
        data: () => ({
            items: [],
            search: '',
            prodListMeta: [
                {value: 'RB10032',label: '大额存单'},
                {value: 'RB10036',label: '个人活期存款'},
                {value: 'RB10035',label: '个人外币活期存款'}
            ],
            prodListHot: [
                {value: 'RB10032',label: '单位活期存款'},
                {value: 'RB10036',label: '单位定期存款'},
                {value: 'RB10035',label: '个人多币种活期存款'},
                {value: 'RB10035',label: '个人定期存款'},
                {value: 'RB10035',label: '大额存单'}
            ],
            users: [
                {
                    jobTitle: 'RB10032',
                    name: '大额存单',
                    avatar: {
                        src: '/static/bg/33.jpg',
                        size: '36'
                    },
                },
                {
                    jobTitle: 'RB10036',
                    name: '个人活期存款',
                    color: 'pink',
                    dark: true,
                    avatar: {
                        src: '/static/bg/33.jpg',
                        size: '36'
                    },
                },
                {
                    jobTitle: 'RB10035',
                    name: '个人多币种活期存款',
                    color: 'teal',
                    dark: true,
                    avatar: {
                        src: '/static/bg/33.jpg',
                        size: '36'
                    },
                },
                {
                    jobTitle: 'RB10038',
                    name: '个人定期存款',
                    dark: true,
                    cardBgImage: '/static/bg/15.jpg',
                    avatar: {
                        src: '/static/bg/33.jpg',
                        size: '36'
                    },
                },

            ],
            complex: {
                selected: [],
                headers: [
                    {
                        text: 'Avatar',
                        value: 'avatar'
                    },
                    {
                        text: '产品代码',
                        value: 'prodCode'
                    },
                    {
                        text: '产品类型',
                        value: 'prodType'
                    },
                    {
                        text: '产品状态',
                        value: 'status'
                    },
                    {
                        text: 'Action',
                        value: ''
                    },
                ],
            },
            basic: {
                headers: [
                    {
                        text: 'Dessert (100g serving)',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'Calories', value: 'calories' },
                    { text: 'Fat (g)', value: 'fat' },
                    { text: 'Carbs (g)', value: 'carbs' },
                    { text: 'Protein (g)', value: 'protein' },
                    { text: 'Iron (%)', value: 'iron' }
                ],
                items: [
                    {
                        value: false,
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%'
                    },
                    {
                        value: false,
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%'
                    },
                    {
                        value: false,
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%'
                    },
                    {
                        value: false,
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: '8%'
                    },
                    {
                        value: false,
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: '16%'
                    },
                    {
                        value: false,
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: '0%'
                    },
                    {
                        value: false,
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: '2%'
                    },
                    {
                        value: false,
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: '45%'
                    },
                    {
                        value: false,
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: '22%'
                    },
                    {
                        value: false,
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: '6%'
                    }
                ]
            }
        }),
        mounted: function() {
            this.queryDespositProdData()
        },
        methods: {
            handleClick: (e) => {
                console.log(e);
            },
            queryDespositProdData() {
                getDepositProdInfo().then(response => {
                    this.items = response.data.depositProd
                })

            }
        }
    };
</script>
