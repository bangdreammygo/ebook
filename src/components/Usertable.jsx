// 用来展示左右用户信息的组件
import React, { useState } from 'react';
import {Table, Switch, message} from 'antd';
const UserTable = ({ userData, onUpdateBan }) => {
    const [loading, setLoading] = useState(false);

    const handleBanChange = (userId, ban) => {
        setLoading(true);
        onUpdateBan(userId, ban)
            .then(() => {
                message.success('封禁状态更新成功');
            })
            .catch((error) => {
                console.error('封禁状态更新失败:', error);
                message.error('封禁状态更新失败');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '管理员权限',
            dataIndex: 'isworker',
            key: 'isworker',
            render: (worder) => (worder?"是":"否")
        },
        {
            title: '是否封禁',
            dataIndex: 'isAvailable',
            key: 'isAvailable',
            render: (ban, record) => (
                <Switch
                    checked={ban}
                    loading={loading}
                    onChange={(checked) => handleBanChange(record.id, checked)}
                />
            ),
        },
    ];
    return <Table dataSource={userData} columns={columns} />;
};


export default UserTable;
