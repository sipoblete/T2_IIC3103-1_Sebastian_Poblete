import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'dens4o8i51m0k3',
    'hcvalvibmzfnbn',
    '024e9ede2c9c00059f3acc034f43c2cc2fc53421987eb3d280e3cab8fd2495cd',
    {
        host: 'ec2-54-165-36-134.compute-1.amazonaws.com',
        dialect: 'postgres',
        port:5432,
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)

