import * as React from "react";

type LayoutTableProps = React.TableHTMLAttributes<HTMLTableElement>;


export function LayoutTable({children, style, ...rest}: Readonly<LayoutTableProps>) {
    return (

        <table
            role="presentation"
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            style={style}
            {...rest}
        >
            {children}
        </table>
    );
}