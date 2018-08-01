const Menu =  [
    { header: 'Apps' },
    {
        title: '首页',
        group: 'apps',
        icon: 'dashboard',
        name: 'Dashboard',
    },
    {
        title: '产品展现',
        group: 'apps',
        icon: 'chat_bubble',
        name: 'prodCmb',
    },
    {
        title: '我的工作台',
        group: 'apps',
        name: 'MyWork',
        target: '_blank',
        icon: 'email'
    },
    {
        title: '我收藏的产品',
        group: 'apps',
        name: 'MyProd',
        target: '_blank',
        icon: 'email'
    },
    { header: '产品工厂' },
    {
        title: '存款产品',
        group: 'components',
        component: 'components',
        icon: 'tune',
        items: [
            { name: 'deposit2', title: '个人产品系列', component: 'prod/deposit2' },
            { name: 'deposit2', title: '单位产品系列', component: 'prod/deposit2' },
            { name: 'deposit2', title: '大额存单系列', component: 'prod/deposit2' },
            { name: 'deposit2', title: '特色产品系列', component: 'prod/deposit2' },

        ]
    },
    {
        title: '贷款产品',
        group: 'components',
        component: 'components',
        icon: 'tune',
        items: [
            { name: 'deposit2', title: '个人产品系列', component: 'prod/deposit2' },
            { name: 'deposit2', title: '单位产品系列', component: 'prod/deposit2' },
            { name: 'deposit2', title: '大额存单系列', component: 'prod/deposit2' },
            { name: 'deposit2', title: '特色产品系列', component: 'prod/deposit2' },

        ]
    },
    {
        title: '内部帐产品产品',
        group: 'components',
        component: 'components',
        icon: 'tune',
        items: [
            { name: 'deposit2', title: '个人产品系列', component: 'prod/deposit2' },
            { name: 'deposit2', title: '单位产品系列', component: 'prod/deposit2' },
            { name: 'deposit2', title: '大额存单系列', component: 'prod/deposit2' },
            { name: 'deposit2', title: '特色产品系列', component: 'prod/deposit2' },
        ]
    },
    { header: '参数工厂' },
    {
        title: '参数管理',
        group: 'components',
        component: 'components',
        icon: 'tune',
        items: [
            { name: 'deposit2', title: '参数管理入口', component: 'prod/deposit2' },

        ]
    },
    { divider: true },
    { header: 'Extras' },
    {
        title: 'Pickers',
        group: 'prod',
        component: 'prod',
        icon: 'filter_vintage',
        items: [
            { name: 'cardPatenProd', title: '产品流程', component: 'prod/cardPatenProd' },
            { name: 'cardPatenProd3', title: '产品流程2', component: 'prod/cardPatenProd3' },
            { name: 'deposit2', title: '产品展现2', component: 'prod/deposit2' },
            { name: 'prodCmb', title: '产品流程3', component: 'prodCmb' },
            { name: 'SerchList', title: '产品流程4', component: 'prod/SerchList' },
            { name: 'prodDiff', title: '差异对比', component: 'diff/prodDiff' },
            { name: 'deposit', title: '产品展现', component: 'prod/deposit' },
        ]
    },
    {
        title: 'UI',
        group: 'extra',
        icon: 'list',
        items: [
            { name: 'Login', title: 'Login', component: 'Login' },
            { name: '404', title: '404', component: 'NotFound' },
            { name: '403', title: '403', component: 'AccessDenied' },
            { name: '500', title: '500', component: 'ServerError' },
            { name: 'basic', title: 'General', component: 'components/basic-forms' },
            { name: 'selects', title: 'Selects', badge: 'new', component: 'components/selects' },
            { name: 'selection-controls', title: 'Selection Controls', component: 'components/selection-controls' },
            { name: 'text-fields', title: 'Text Fields', component: 'components/text-fields' },
            { name: 'steppers', title: 'Steppers', component: 'components/steppers' },
            { name: 'editors', title: 'Editors', component: 'components/editors' },
            { name: 'bottom-sheets', title: 'Bottom panels', component: 'components/bottom-sheets' },
            { name: 'expansion-panels', title: 'Expansion panels', component: 'components/expansion-panels' },
            { name: 'footer', title: 'Footer', component: 'components/footer' },
            { name: 'lists', title: 'Lists', component: 'components/lists' },
            { name: 'jumbotrons', title: 'Jumbotrons', badge: 'new', component: 'components/jumbotrons' },
            { name: 'menus', title: 'Menus', component: 'components/menus' },
            // { name: 'navigation-drawers', title: 'Navigation drawers', component: 'components/navigation-drawers' },
            { name: 'tabs', title: 'Tabs', component: 'components/tabs' },
            { name: 'toolbar', title: 'Toolbars', component: 'components/toolbar' },
            { name: 'timeline', title: 'Timeline', component: 'components/timeline' },
            { name: 'timepicker', title: 'Timepicker', component: 'pickers/timepicker' },
            { name: 'datepicker', title: 'Datepicker', component: 'pickers/datepicker' },
            { name: 'cardPatenProdList', title: 'cardPatenProdList', component: 'prod/cardPatenProdList' },
            { name: 'alerts', title: 'Alerts', component: 'components/alerts' },
            { name: 'avatars', title: 'Avatars', component: 'components/avatars' },
            { name: 'badges', title: 'Badges', component: 'components/badges' },
            { name: 'buttons', title: 'Buttons', component: 'components/buttons' },
            { name: 'cards', title: 'Cards', component: 'components/cards' },
            { name: 'carousels', title: 'Carousels', component: 'components/carousels' },
            { name: 'chips', title: 'Chips', component: 'components/chips' },
            { name: 'dialogs', title: 'Dialogs', component: 'components/dialogs' },
            { name: 'icons', title: 'Icons', component: 'components/icons' },
            { name: 'tables', title: 'Data Tables', component: 'components/tables' },
            { name: 'parallax', title: 'Parallax  image', component: 'components/parallax' },
            { name: 'snackbar', title: 'Snackbar', component: 'components/snackbar' },
            { name: 'progress', title: 'Progress', component: 'components/progress' },
            { name: 'slider', title: 'Slider', component: 'components/sliders' },
            { name: 'tooltip', title: 'Tooltip', component: 'components/tooltips' },
            { name: 'pagination', title: 'Pagination', component: 'components/paginations' },
            { name: 'typography', title: 'Typography', component: 'components/typography' },
            { name: 'color', title: 'Color', component: 'components/color' },
            { name: 'social', title: 'Social', component: 'components/social' },
            { name: 'statistic', title: 'Statistic', badge: 'new', component: 'components/statistic' },
            { name: 'chart', title: 'Chart', component: 'components/chart' },
            { name: 'list', title: 'List', component: 'components/widget-list' },
        ]
    }
];
// reorder menu
Menu.forEach((item) => {
    if (item.items) {
        item.items.sort((x, y) => {
            let textA = x.title.toUpperCase();
            let textB = y.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
});

export default Menu;
