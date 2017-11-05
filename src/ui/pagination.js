import React, {Component} from 'react';
import './ui.css';
/**
 * 分页组件
 * @param count 总页数
 * @param current 当前页数
 * @param callback 回调函数返回选定页数
 */
export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let page = e.target.dataset.page;
        if (this.props.current != page) {
            this.props.callback(page);
        }
    }

    render() {
        let count = Number(this.props.count),
            current = Number(this.props.current),
            showCount = 10;    //展示总数

        if (count < 2) return null;
        let pages = [],
            start = 1,
            next = null,
            end = null;
        if (count > 10) {
            let difference = (count - current);
            if (current > 6) {
                pages.push(
                    <span 
                        className='ui-pagination-item' 
                        data-page='1' 
                        onClick={this.handleClick}
                        key='index'
                    >首页</span>
                );
                start = (current - 5);    //计算第一页
                if (difference < 4) start -= (4 - difference);
            }
            if (1 != current) {
                pages.push(
                    <span 
                        className='ui-pagination-item' 
                        data-page={(current - 1)} 
                        onClick={this.handleClick}
                        key='previous'
                    >上一页</span>
                );
            }
            if (count != current) {
                next = (
                    <span 
                        className='ui-pagination-item'
                        data-page={(current + 1)} 
                        onClick={this.handleClick}
                        key='next'
                    >下一页</span>
                );
            }
            if (difference > 4) {
                end = (
                    <span 
                        className='ui-pagination-item' 
                        data-page={count} 
                        onClick={this.handleClick}
                        key='end'
                    >尾页</span>
                );
            }
        }
        while(start <= count) {
            pages.push(
                <span 
                    className={start == current ? 'ui-pagination-choose' : 'ui-pagination-item'}
                    data-page={start}
                    onClick={this.handleClick}
                    key={start}
                >{start}</span>
            );
            ++start;--showCount;
            if (0 === showCount) break; 
        }
        if (null !== next) pages.push(next);
        if (null !== end) pages.push(end);
        return (
            <div className='ui-pagination'>{pages}</div>
        );
    }
}