import React, {} from 'react';

const Pagination = (props) => {
    const pages = props.totalItems > 0 ? (Math.ceil(props.totalItems / props.itemsPerPage)) : 1;
    return (
        <div className="row">
            <div className="col-lg-12">
                <ul className="pagination pagination-rounded justify-content-center mt-4">
                    <li className={(props.page === 1 ? 'disabled' : '') + " page-item"}>
                        <span role="button" className="page-link" onClick={() => props.changePage(props.page - 1)}>
                            <i className="mdi mdi-chevron-left"></i>
                        </span>
                    </li>
                    <li className={(props.page === 1 ? 'active' : '') + " page-item"}>
                        <span role="button" className="page-link" onClick={() => props.page === 1 ? undefined : props.changePage(1)}>
                            1
                        </span>
                    </li>
                    {props.page > 4 && (
                        <li className="page-item">
                            <span className="page-link">
                                ...
                            </span>
                        </li>
                    )}
                    {props.page > 2 && (
                        <li className="page-item">
                            <span role="button" className="page-link" onClick={() => props.changePage(props.page - 1)}>
                                {props.page - 1}
                            </span>
                        </li>
                    )}
                    {props.page > 1 && props.page < pages && (
                        <li className="page-item active">
                            <span role="button" className="page-link">
                                {props.page}
                            </span>
                        </li>
                    )}
                    {props.page !== pages && (props.page + 1) !== pages && (
                        <li className="page-item">
                            <span role="button" className="page-link" onClick={() => props.changePage(props.page + 1)}>
                                {props.page + 1}
                            </span>
                        </li>
                    )}
                    {props.page !== pages && props.page  !== (pages - 1) && props.page !== (pages - 2) && (
                        <li className="page-item">
                            <span className="page-link">...</span>
                        </li>
                    )}
                    {pages > 1 && (
                        <li className={(props.page === pages ? 'active' : '') + " page-item"}>
                            <span role="button" className="page-link" onClick={() => props.page === pages ? undefined : props.changePage(pages)}>
                                {pages}
                            </span>
                        </li>
                    )}
                    <li className={(props.page === pages ? 'disabled' : '') + " page-item"}>
                        <span role="button" className="page-link" onClick={() => props.page !== pages ? props.changePage(props.page + 1) : undefined}>
                            <i className="mdi mdi-chevron-right"></i>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Pagination