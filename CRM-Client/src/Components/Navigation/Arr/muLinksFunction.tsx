import * as React from "react";

import PostAddIcon from '@mui/icons-material/PostAdd';
import ExtensionIcon from '@mui/icons-material/Extension';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export const LinksFunction = [
    {
        name: "Загрузить документацию",
        icon: <ArrowCircleDownIcon/>
    },
    {
        name: "Сгенерировать Отчёт",
        icon: <PostAddIcon/>
    },
    {
        name: "Сформировать График",
        icon: <ExtensionIcon/>
    }
]