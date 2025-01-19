from bisect import bisect_right

class Solution(object):
    def jobScheduling(self, startTime, endTime, profit):
        """
        :type startTime: List[int]
        :type endTime: List[int]
        :type profit: List[int]
        :rtype: int
        """
        class Job:
            def __init__(self, start, end, profit):
                self.start = start
                self.end = end
                self.profit = profit

        n = len(startTime)
        jobs = sorted([Job(startTime[i], endTime[i], profit[i]) for i in range(n)], key=lambda x: x.end)
        dp = [0] * (n + 1)
        end_times = [job.end for job in jobs]

        for i in range(1, n + 1):
            # Find the last job that doesn't conflict using binary search
            idx = bisect_right(end_times, jobs[i - 1].start) - 1
            dp[i] = max(dp[i - 1], jobs[i - 1].profit + (dp[idx + 1] if idx != -1 else 0))

        return dp[n]
