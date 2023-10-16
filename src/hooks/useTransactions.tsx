import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { TransactionFiltersType, setFilters } from '@/features/transactions/transactionSlice';
import { transactionType } from '@/typings/business';
import TabScene from '@/screens/Dashboard/Transactions/TabScene';
const itemList = [
    {maintitle:'Last 7 Days',value:7,id:1,selected:true},
    {maintitle:'Last 15 Days',value:15,id:2},
    {maintitle:'Last 30 Days',value:30,id:3},
    {maintitle:'Last 45 Days',value:45,id:4},
    {maintitle:'Last 60 Days',value:60,id:5}
  ]
const useTransactions = () => {
    const dispatch = useDispatch();
    const {transactions:transactionData, filters:filterData} = useSelector((state: RootState) => state.transactionReducer);
    const { currency }: { currency: string; } = useSelector((state: RootState) => state.transactionReducer);
    const filters:TransactionFiltersType[] = filterData;
    const [transactions,setTransactions] = useState<transactionType[]>([])
    const [selectedDuration, setSelectedDuration] = useState<number>(0);
    const datesData= filters?.find((item) => item.type === 'dates')?.value;
    const amountsData= filters?.find((item) => item.type === 'amounts')?.value;
    const transactionTypeData= filters?.find((item) => item.type === 'transactionType')?.value;

    const tabData = [
        {
          title: 'All',
          renderScene: () => <TabScene transactions={transactions} currency={currency} type='All' />,
        },
        {
          title: 'Money In',
          renderScene: () => <TabScene transactions={transactions} currency={currency} type='MONEY_IN' />,
        },
        {
          title: 'Money Out',
          renderScene: () => <TabScene transactions={transactions} currency={currency} type='MONEY_OUT' />,
        },
    ];

    const filterByDateRangeTransactions = (data:any,transactions:transactionType[]) => {
        const fromDateTimestamp = data.find((item:any) => item.btn === "From")?.timeStamp;
        const toDateTimestamp = data.find((item:any) => item.btn === "To")?.timeStamp;
        const fromDate = fromDateTimestamp ? new Date(fromDateTimestamp).getTime() : 0;
        const toDate = toDateTimestamp ? new Date(toDateTimestamp).getTime() : Date.now();
        const filteredTransactions = transactions?.filter((transaction) => {
          const transactionTime = new Date(transaction.time).getTime();
          return transactionTime >= fromDate && transactionTime <= toDate;
        });
        return filteredTransactions;
    };
    const filterByAmountTransactions = (data:any,transactions:transactionType[]) => {
        const fromAmount = data.find((item:any) => item.btn === "From")?.value;
        const toAmount = data.find((item:any) => item.btn === "To")?.value;
        const filteredTransactions = transactions?.filter((transaction) => {
            const transactionAmount = transaction.amount;
            return transactionAmount >= fromAmount && transactionAmount <= toAmount;
        });
        return filteredTransactions;
    };
    
    const handleFilters = (transactions:transactionType[]) => {
        let transactionToFilter = transactions
        if(datesData){
            transactionToFilter = filterByDateRangeTransactions(datesData,transactionToFilter);
        }
        if(amountsData){
            transactionToFilter = filterByAmountTransactions(amountsData,transactionToFilter)
        }
        if(transactionTypeData){
            transactionToFilter = transactionToFilter.filter(item => item.type === transactionTypeData);
        }
        setTransactions(transactionToFilter)
    }
    const removeFilters = (filterType:'dates' | 'transactionType' | 'amounts') =>  dispatch(setFilters(filters.map(item => item.type === filterType ? {...item,value:false} : item)));
    useEffect(() => {
        if(selectedDuration !== 0){
            const duration = selectedDuration * 86400000;
            const startTime = Date.now() - duration * 86400000;
            const filteredTransactions = transactions.filter((transaction) => transaction.time >= startTime);
            setTransactions(filteredTransactions);
        }
    },[selectedDuration])

    useEffect(() => {
        if(filters.filter(item => item.value).length > 0){
            handleFilters(transactionData);
        }else{
            setTransactions(transactionData);
        }
    },[filters])
    return {selectedDuration,datesData,amountsData,transactionTypeData,filters,currency,tabData,removeFilters,setSelectedDuration,itemList,transactionData}
}

export default useTransactions