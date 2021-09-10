import React from 'react';
import Spinner from '../components/Spinner';

type LoadingProps = {
    loading: boolean;
};

const Loader: React.FC<LoadingProps> = ({ loading }: LoadingProps) => (
    <div className={`loader fade-exit ${loading ? '' : 'fade-exit-active'}`} style={{ pointerEvents: loading ? 'all' : 'none' }}>
        <Spinner />
        <p className="mt-2 text-blue-800">Loading</p>
    </div>
);

export default Loader;
